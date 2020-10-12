/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  // dp 表示凑成金额i的最小硬币数
  let dp  = []
  dp[0] = 0
  for (let i = 0; i < coins.length; i++) {
    dp[coins[i]] = 1
  }
  for (let i = 1; i <= amount; i++) {
    if (!dp[i]) {
      // 如果 dp[i] 没有值，计算 dp[i]
      let pre = []
      for (let j = 0; j < coins.length; j++) {
        if (i - coins[j] > 0 && dp[i-coins[j]]) {
          pre.push(dp[i-coins[j]])
        }
      }
      if (pre.length > 0) {
        dp[i] = Math.min(...pre) + 1
      }
    }
  }
  return dp[amount] === undefined ? -1 : dp[amount]
};
