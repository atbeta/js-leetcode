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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
  // 找到第d-1行的所有节点
  // 循环 d-1 行的所有节点，使用 v 为值创建新节点，如果是左孩子，则为新节点的左孩子，替换掉原来的左孩子，右孩子同理
const addOneRow = function(root, v, d) {
    // 单独处理 d = 1 的情况
    if (d === 1) {
      let newRootNode = new TreeNode(v)
      newRootNode.left = root
      return newRootNode
    }
    // 找第 d - 1 行的所有节点
    let nodes = []
    let level = 1
    let queue = []
    queue.push(root)
    let currentLevelCount = 1
    let nextLevelCount = 0
    while (queue.length) {
      let current = queue.shift()
      currentLevelCount--
      if (level === d - 1) {
        nodes.push(current)
      }
      if (current.left) {
        queue.push(current.left)
        nextLevelCount++
      }
      if (current.right) {
        queue.push(current.right)
        nextLevelCount++
      }
      if (currentLevelCount === 0 && nextLevelCount) {
        level++
        currentLevelCount = nextLevelCount
        nextLevelCount = 0
      }
    }
    // 找到 d - 1 行所有节点后，循环处理
    nodes.forEach(node => {
      let newLeftNode = new TreeNode(v)
      newLeftNode.left = node.left
      node.left = newLeftNode
      let newRightNode = new TreeNode(v)
      newRightNode.right = node.right
      node.right = newRightNode
    })
    return root
  }


const addOneRowImproved = function(root, v, d) {
    // 单独处理 d = 1 的情况
    if (d === 1) {
      let newRootNode = new TreeNode(v)
      newRootNode.left = root
      return newRootNode
    }
    // 找第 d - 1 行的所有节点并直接处理
    let level = 1
    let queue = []
    queue.push(root)
    let currentLevelCount = 1
    let nextLevelCount = 0
    while (queue.length && level < d) {
      let current = queue.shift()
      currentLevelCount--
      if (current.left) {
        queue.push(current.left)
        nextLevelCount++
      }
      if (current.right) {
        queue.push(current.right)
        nextLevelCount++
      }
      if (level === d - 1) {
        let newLeftNode = new TreeNode(v)
        newLeftNode.left = current.left
        current.left = newLeftNode
        let newRightNode = new TreeNode(v)
        newRightNode.right = current.right
        current.right = newRightNode
      }
      if (currentLevelCount === 0 && nextLevelCount) {
        level++
        currentLevelCount = nextLevelCount
        nextLevelCount = 0
      }
    }
    return root
  }
