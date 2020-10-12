/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  // 同时维护乘积最大和乘积最小
  let minDp = []
  let maxDp = []
  minDp[0] = nums[0]
  maxDp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    // 如果 nums[i] 为正值，最大值为 Math.max(nums[i], nums[i]*maxDp[i-1])
    if (nums[i] > 0) {
      maxDp[i] = Math.max(nums[i], nums[i] * maxDp[i-1])
      minDp[i] = Math.min(nums[i], nums[i] * minDp[i-1])
    }
    // 如果为0，一定为0
    if (nums[i] === 0) {
      minDp[i] = 0
      maxDp[i] = 0
    }
    // 如果为负值
    if (nums[i] < 0) {
      maxDp[i] = Math.max(nums[i], nums[i] * minDp[i-1])
      minDp[i] = Math.min(nums[i], nums[i] * maxDp[i-1])
    }
  }
  return Math.max(...maxDp)
};
