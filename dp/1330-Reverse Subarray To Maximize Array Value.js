/**
 * @param {number[]} nums
 * @return {number}
 */
var maxValueAfterReverse = function(nums) {
// 计算原来的值，并存储某值和后面值的差的绝对值数组
  let sum = 0
  let abs = []
  for (let i = 0; i < nums.length - 1; i++) {
    abs[i] = Math.abs(nums[i+1] - nums[i])
    sum += abs[i]
  }
// let dp = []
  let maxChange = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // if (!dp[i]) {
      //   dp[i] = []
      // }
      // dp[i][j] = 0
      let before = 0
      let after = 0
      if (i - 1 >= 0) {
        before += abs[i-1]
        after += Math.abs(nums[j] - nums[i-1])
      }
      if (j+1 < nums.length) {
        before += abs[j]
        after += Math.abs(nums[j+1] - nums[i])
      }
      // dp[i][j] = after - before
      if (after - before > maxChange) {
        maxChange = after - before
      }
    }
  }
  return sum + maxChange
};
