/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 暴力算法，定位开头位置，循环结尾位置，边循环边计算和，时间复杂度为 O(n2)
var subarraySum = function(nums, k) {
  let sum
  let result = 0
  for (let start = 0; start < nums.length; start ++) {
    sum = nums[start]
    if (sum === k) {
      result ++
    }
    for (let end = start + 1; end < nums.length; end ++) {
      sum += nums[end]
      if (sum === k) {
        result ++
      }
    }
  }
  return result
};

