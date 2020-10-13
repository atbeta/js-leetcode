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
const findFrequentTreeSum = function(root) {
  let result = []
  nodeSums(root, result)
  return filterFrequent(result)
}

function nodeSums(root, result) {
  // result 用于记录所有结果
  if (!root) return 0
  if (!root.left && !root.right) {
    result.push(root.val)
    return root.val
  }
  let sum = root.val + nodeSums(root.left, result) + nodeSums(root.right, result)
  result.push(sum)
  return sum
}

function filterFrequent(nums) {
  let max = 0 // 最大出现的次数
  let frequentMap = new Map()
  nums.forEach(num => {
    if (!frequentMap.has(num)) {
      frequentMap.set(num, 1)
    } else {
      frequentMap.set(num, frequentMap.get(num) + 1)
    }

    if (frequentMap.get(num) > max) {
      max = frequentMap.get(num)
    }
  })
  let result = []
  frequentMap.forEach((value, key) => {
    if (value === max) {
      result.push(key)
    }
  })
  return result
}

