/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = function(root) {
  // 粗暴的办法
  // 中序遍历得到数组，变成交换2个数字就能升序排列
  // 找到这2个节点，交换节点值
  const {list, nodes} = inorderTraversal(root)
  const { left, right } = findSwapNums(list)
  let temp = nodes[left].val
  nodes[left].val = nodes[right].val
  nodes[right].val = temp
};

// 非递归中序，并且存储所有的节点，方便后面更改
function inorderTraversal(root) {
  if (!root) return []
  const stack = []
  const result = []
  const nodes = []
  let current = root
  while (current || stack.length) {
    if (!current) {
      current = stack.pop()
      // 出栈的节点左孩子都已经访问过了，直接访问节点值并指向右孩子
      result.push(current.val)
      nodes.push(current)
      current = current.right
    }
    if (current && current.left) {
      stack.push(current)
      current = current.left
    } else if (current) {
      result.push(current.val)
      nodes.push(current)
      current = current.right
    }
  }
  return {
    list: result,
    nodes
  }
}

function findSwapNums(arr) {
  // 找到要交换的位置
  let leftIndex = 0
  let rightIndex = arr.length - 1
  while (arr[leftIndex] < arr[leftIndex+1]) {
    leftIndex++
  }
  while (arr[rightIndex] > arr[rightIndex-1]) {
    rightIndex--
  }
  return {
    left: leftIndex,
    right: rightIndex
  }
}

// leetcode 95 生成所有的唯一的二叉搜索树

