/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (nums.length === 0) return 0
  // 定义 dp[i]为到以i位置结尾的最长上升子序列长度
  let dp = []
  dp[0] = 1
  for (let i = 1; i < nums.length; i++) {
    // dp[i] = 向左找到值比 nums[i] 小的里面 dp值最大的一个 + 1，如果没有就是1
    let maxDp = 0
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i] && dp[j] > maxDp) {
        maxDp = dp[j]
      }
    }
    dp[i] = maxDp + 1
  }
  return Math.max(...dp)
};
