/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  // dp[i] = 第一个比T[i]大的值的位置
  // len = T.length dp[len-1] = 0
  // 从右向左循环 dp[i] = 跳着走来找
  // 然后使用 dp 生成结果 i-dp[i]
  let dp = []
  let len = T.length
  dp[len-1] = -1
  for (let i = len-2;i >=0;i--) {
    // 计算 dp[i]
    // 一直向右找到第一个满足 T[dp[j]] > T[i] 的位置，dp[i] = dp[j]
    dp[i] = -1
    for (let j = i+1;j < len;j++) {
      // 这里可以优化，不必循环那么多次
      // 如果 T[j] <= T[i]，那么下一个j至少要是 dp[j]，如果dp[j]是-1，直接可以中止循环，直接dp[i] = -1
      if (T[j] <= T[i]) {
        if (dp[j] === -1) {
          dp[i] = -1
          break
        } else {
          j = dp[j] - 1 // 前面应该用 while 循环会好一些，因为 for 循环每次都会自动加1，这里-1抵消掉，暂不改写循环了
        }
      } else {
        dp[i] = j
        break
      }
    }
  }
  let result = dp.map((v,i) => {
    if (v === -1) {
      return 0
    } else {
      return v - i
    }
  })
  return result
};
