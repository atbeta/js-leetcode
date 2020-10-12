/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  if (envelopes.length === 0) return 0
  // 最长的子序列，满足x递增 y也递增
  // 首先按照x大小排序
  envelopes = envelopes.sort((a,b) => a[0] - b[0])
  // 定义dp数组意义为以第i个信封为最后一个信封时的最大信封数
  let dp = []
  dp[0] = 1
  for (let i = 1; i < envelopes.length; i++) {
    // dp[i] = 前面所有信封中，能够装进第i个信封的信封中，dp值最大的 + 1
    let max = 0
    for (let j = i-1; j >= 0; j--) {
      // 如果j能放进i
      if (envelopes[j][0] < envelopes[i][0] && envelopes[j][1] < envelopes[i][1]) {
        if (dp[j] > max) {
          max = dp[j]
        }
      }
    }
    dp[i] = max + 1
  }
  return Math.max(...dp)
};
