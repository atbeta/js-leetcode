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
 * @return {number[]}
 */
// 思路是打印出各层的最后一个结点， BFS
const rightSideView = function(root) {
  let queue = []
  queue.push(root)
  let level = 1
  let currentLevelCount = 1
  let nextLevelCount = 0
  let result = [] // 结果数组
  while (queue.length) {
    let current = queue.shift()
    currentLevelCount --
    // 如果这是该层最后一个就打印这个值
    if (current.left) {
      queue.push(current.left)
      nextLevelCount ++
    }
    if (current.right) {
      queue.push(current.right)
      nextLevelCount ++
    }
    if (currentLevelCount === 0) {
      result.push(current.val)
      currentLevelCount = nextLevelCount
      nextLevelCount = 0
    }
  }
  return result
}
