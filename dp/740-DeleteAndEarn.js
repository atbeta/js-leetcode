/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  if (nums.length === 0) return 0
  // 将数字去重排序
  let numsNoDuplicate = Array.from(new Set(nums)).sort((a,b) => a - b)
  // 计算每个数字的权重，即所有这个数字的累加和
  let weight = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < numsNoDuplicate.length; j++) {
      if (!weight[j]) {
        weight[j] = 0
      }
      if (nums[i] === numsNoDuplicate[j]) {
        weight[j] += nums[i]
      }
    }
  }
  // 构造dp，表示第i大的数字结束时最大点数
  let dp = []
  dp[0] = weight[0]
  for (let i = 1; i < weight.length; i++) {
    // dp[i]是以下两个值中的最大值
    // 1. dp[i-2]+weight[i] (如果i-2<0,dp[i-2]=0)
    // numsNoDuplicate[i]和numsNoDuplicate[i-1] 如果不相邻
    // 2. dp[i-1]+weight[i]
    // numsNoDuplicate[i]和numsNoDuplicate[i-1] 如果相邻
    // 2. dp[i-1]
    let lastNoUse = (i-2 >= 0 ? dp[i-2] : 0) + weight[i]
    let lastUse = numsNoDuplicate[i] - numsNoDuplicate[i-1] === 1 ? dp[i-1] : dp[i-1] + weight[i]
    dp[i] = Math.max(lastNoUse, lastUse)
  }
  return dp[numsNoDuplicate.length - 1]
};
