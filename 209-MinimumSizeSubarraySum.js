/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// 使用双指针，O(n)时间复杂度
const minSubArrayLen = function(s, nums) {
  if (nums.length === 0) return 0
  let left = 0
  let right = 0
  let currentSum = nums[0]
  let min = 0
  // 可用操作 右移right 右移left
  while (right < nums.length) {
    if (currentSum < s) {
      // 右移right
      right ++
      currentSum += nums[right]
    } else {
      // 更新 min 值
      let currentMin = right - left + 1
      if (min === 0 || currentMin < min) {
        min = currentMin
      }
      // 右移right，更新当前和
      currentSum = currentSum - nums[left]
      left++
    }
  }
  return min
}

// 题目中提到的nlogn算法
// 使用分治法,待补充
function minSubArr(s, nums) {
  //
}
