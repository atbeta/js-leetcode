class TreeNode {
  constructor (val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class Queue {
  constructor (arr) {
    this.list = arr || []
  }
  enqueue(item) {
    this.list.push(item)
  }
  dequeue() {
    return this.list.shift()
  }
  isEmpty() {
    return this.list.length === 0
  }
}

// 将数组转化成二叉树[1,2,null,3,null]
// 实际是根据广度优先遍历恢复树
function arrayToTree(arr) {
  if (arr.length === 0) return null
  let root = new TreeNode(arr[0]) // 最终生成的树
  let currentIndex = 1 // 数组位置
  // 需要使用队列来存放待增加子树的节点
  const queue = new Queue()
  queue.enqueue(root)
  while (currentIndex < arr.length) {
    let currentNode = queue.dequeue()
    const leftItem = arr[currentIndex]
    const rightItem = currentIndex + 1 < arr.length ? arr[currentIndex + 1] : null
    currentIndex +=2
    if (leftItem) {
      currentNode.left = new TreeNode(leftItem)
      queue.enqueue(currentNode.left)
    }
    if (rightItem) {
      currentNode.right = new TreeNode(rightItem)
      queue.enqueue(currentNode.right)
    }
  }
  return root
}

const root = arrayToTree([1,2,3])

// 二叉树的遍历，递归
function preorderTraversalCur(root) {
  if (!root) return []
  const paths = []
  paths.push(root.val)
  paths.push(...preorderTraversalCur(root.left))
  paths.push(...preorderTraversalCur(root.right))
  return paths
}

function postorderTraversalCur(root) {
  if (!root) return []
  const paths = []
  paths.push(...postorderTraversalCur(root.left))
  paths.push(...postorderTraversalCur(root.right))
  paths.push(root.val)
  return paths
}

// 非递归先序
function preorderTraversal(root) {
  if (!root) return []
  const stack = []
  const paths = []
  let current = root
  while (current || stack.length) {
    if (!current) {
      current = stack.pop()
    }
    paths.push(current.val)
    if (current.right) {
      stack.push(current.right)
    }
    current = current.left
  }
  return paths
}

// 非递归中序
function inorderTraversal(root) {
  if (!root) return []
  const stack = []
  const paths = []
  let current = root
  while (current || stack.length) {
    if (!current) {
      current = stack.pop()
      // 出栈的节点左孩子都已经访问过了，直接访问节点值并指向右孩子
      paths.push(current.val)
      current = current.right
    }
    if (current && current.left) {
      stack.push(current)
      current = current.left
    } else if (current) {
      paths.push(current.val)
      current = current.right
    }
  }
  return paths
}

// 非递归后序
function postorderTraversal(root) {
  // 左右中，利用栈的特性，利用一个辅助栈，变成 中右左，最后出栈变成 左右中
  // 这样实际上把问题基本简化为了先序遍历，只不过左右相反而已，变化不大
  if (!root) return []
  const paths = []
  const stack = []
  const helperStack = []
  let current = root
  while (current || stack.length) {
    if (!current) {
      current = stack.pop()
    }
    // 原本是要访问值，但这里入辅助栈
    helperStack.push(current)
    if (current.left) {
      stack.push(current.left)
    }
    current = current.right
  }
  while (helperStack.length) {
    paths.push(helperStack.pop().val)
  }
  return paths
}

// morris 遍历

// 返回树的最小深度
function getMinDepth(root) {
  if (!root) return 0
  if (!root.left && !root.right) return 1
  const leftDepth = getMinDepth(root.left)
  const rightDepth = getMinDepth(root.right)
  if (leftDepth === 0) {
    return rightDepth + 1
  }
  if (rightDepth === 0) {
    return leftDepth + 1
  }
  return Math.min(leftDepth, rightDepth) + 1
}

// 广度优先遍历
function BFS(root) {
  if (!root) return []
  const paths = []
  const queue = new Queue()
  queue.enqueue(root)
  while (!queue.isEmpty()) {
    let current = queue.dequeue()
    paths.push(current.val)
    if (current.left) {
      queue.enqueue(current.left)
    }
    if (current.right) {
      queue.enqueue(current.right)
    }
  }
  return paths
}

// 加强版广度优先遍历，记录层级值
// 怎么知道当前层级呢？
function superBFS(root) {
  if (!root) return []
  const paths = []
  const queue = new Queue()
  queue.enqueue(root)
  // 需要三个辅助变量，记录当前层级，当前层级节点数和下一层级节点数
  let level = 0
  let currentLevelCount = 1
  let nextLevelCount = 0
  paths[level] = []
  while (!queue.isEmpty()) {
    let current = queue.dequeue()
    if (!paths[level]) {
      paths[level] = []
    }
    paths[level].push(current.val)
    currentLevelCount--
    if (current.left) {
      queue.enqueue(current.left)
      nextLevelCount++
    }
    if (current.right) {
      queue.enqueue(current.right)
      nextLevelCount++
    }
    if (currentLevelCount === 0) {
      level++
      currentLevelCount = nextLevelCount
      nextLevelCount = 0
    }
  }
  return paths
}

// 有序链表生成排序二叉树，leetcode 109
// 这里简化为数组
// 理论上讲可以以任何一个节点为根节点
function sortedListToBST(list) {
  if (list.length === 0) return null
  const mid = Math.floor(list.length / 2)
  const root = new TreeNode(list[mid])
  root.left = sortedListToBST(list.slice(0, mid))
  root.right = sortedListToBST(list.slice(mid+1))
  return root
}

// leetcode 99 恢复有两个节点值位置颠倒的BST
// 衍生问题：数组中交换2个值就可以变成有序，找到这两个值
// [1,2,3,4,5] => [1,5,3,4,2], [1,3,2,4,5]
// 被交换的值有什么特点？后面的移动到前面了，所以第一个会比其后面的数还大，第二个会比前面的还小
// 从前面找第一个比后面的数还大的数，从后面找第一个比前面的数还小的，就是这两个

function rebuildArray(arr) {
  // 找到要交换的位置
  let leftIndex = 0
  let rightIndex = arr.length - 1
  while (arr[leftIndex] < arr[leftIndex+1]) {
    leftIndex++
  }
  while (arr[rightIndex] > arr[rightIndex-1]) {
    rightIndex--
  }
  // 交换这两个数
  // [arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]]
  // return arr
}

// 找到二叉树中累加和为指定值的最长路径长度

// 打印二叉树的所有路径
// 不用递归的话，很难到进入和退出路径的位置，用递归就很方便
function printPath(root) {
  let paths = []
  printPathsCur(root, [], paths)
  return paths
}

// helper 方法，包括了已经完成的路径
// 如果当前节点是孩子节点，就打印
function printPathsCur(node, path, paths) {
  if (!node) return
  path.push(node.val)
  if (!node.left && !node.right) {
    paths.push(path)
    return
  }
  printPathsCur(node.left, [...path], paths)
  printPathsCur(node.right, [...path], paths)
}

// 非递归怎么写呢？使用后续遍历
function printPaths(node, path = []) {

}

console.log(printPath(root))
