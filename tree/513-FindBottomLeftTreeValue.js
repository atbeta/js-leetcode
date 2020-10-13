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
 * @return {number}
 */
// 依然是分层遍历，但只需记录一个值
const findBottomLeftValue = function(root) {
  let queue = []
  queue.push(root)
  let currentLevelCount = 1
  let nextLevelCount = 0
  let result = root.val
  while (queue.length) {
    let current = queue.shift()
    currentLevelCount--
    if (current.left) {
      queue.push(current.left)
      nextLevelCount++
      if (nextLevelCount === 1) {
        result = current.left.val
      }
    }
    if (current.right) {
      queue.push(current.right)
      nextLevelCount++
      if (nextLevelCount === 1) {
        result = current.right.val
      }
    }
    if (currentLevelCount === 0 && nextLevelCount) {
      currentLevelCount = nextLevelCount
      nextLevelCount = 0
    }
  }
  return result
}
