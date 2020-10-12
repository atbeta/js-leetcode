/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
  if (nums.length === 0) return 0
  let dp = [] // 表示以nums[i]结尾时的最长子序列
  let countDp = [] // 表示以nums[i]结尾的最长子序列个数，更新dp[i]时同步更新
  dp[0] = 1
  countDp[0] = 1
  for (let i = 1; i < nums.length; i++) {
    // 找到i左侧，满足nums[j]<nums[i]的dp[j]的最大值，并将 countDp也同步进行更新
    // 如果最大值不止出现一次，countDp要将每一个最大值的 countDp都进行累加
    // 为了方便统计，第一次先将所有满足 nums[j] < nums[i]的j放入一个数组
    let leftList = []
    for (let j = i-1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        leftList.push(j)
      }
    }
    if (leftList.length !== 0) {
      // 从 choose 数组中找到dp最大值
      let max = Math.max(...leftList.map(v => dp[v]))
      let equalMaxList = leftList.filter(v => dp[v] === max)
      dp[i] = max + 1
      countDp[i] = 0
      equalMaxList.forEach(v => countDp[i] += countDp[v])
    } else {
      // 直接 dp[i] = 1 countDp[i] = 1
      dp[i] = 1
      countDp[i] = 1
    }
  }
  // 返回的结果是dp数组中最大值的各项countDp值相加
  let maxLen = Math.max(...dp)
  let result = 0
  for (let i = 0; i < dp.length; i++) {
    if (dp[i] === maxLen) {
      result += countDp[i]
    }
  }
  return result
};
