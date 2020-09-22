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
const largestValues = function(root) {
  if (!root) return []
  const maxs = []
  let queue = []
  queue.push(root)
  let level = 0
  let currentLevelCount = 1
  maxs[level] = Number.MIN_SAFE_INTEGER
  let nextLevelCount = 0
  while (queue.length) {
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
    if (current.val > maxs[level]) {
      maxs[level] = current.val
    }
    if (currentLevelCount === 0 && nextLevelCount) {
      level++
      currentLevelCount = nextLevelCount
      nextLevelCount = 0
      maxs[level] = Number.MIN_SAFE_INTEGER
    }
  }
  return maxs
}
