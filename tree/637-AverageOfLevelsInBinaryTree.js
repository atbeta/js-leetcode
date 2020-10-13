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
// 一个分层遍历可以吃掉好多题目
const averageOfLevels = function(root) {
  const averages = []
  const queue = []
  queue.push(root)
  let currentLevelCount = 1
  let currentLevelValues = []
  let nextLevelCount = 0
  while (queue.length) {
    let current = queue.shift()
    currentLevelCount--
    currentLevelValues.push(current.val)
    if (current.left) {
      queue.push(current.left)
      nextLevelCount++
    }
    if (current.right) {
      queue.push(current.right)
      nextLevelCount++
    }
    if (currentLevelCount === 0) {
      averages.push(calcAverage(currentLevelValues))
      currentLevelValues = []
      currentLevelCount = nextLevelCount
      nextLevelCount = 0
    }
  }
  return averages
}

function calcAverage(nums) {
  return nums.reduce((pre, cur) => pre + cur, 0)/nums.length
}
