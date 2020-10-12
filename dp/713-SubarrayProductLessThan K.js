/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  // dp[i][j]表示长度为i+1,以序号为j的元素结尾的乘积, j >= i
  // dp[0] 容易计算
  // dp[i][j] = dp[i-1][j-1] * nums[j]
  let dp = []
  // 计算 dp[0][i]
  dp[0] = []
  for (let i = 0; i < nums.length; i++) {
    dp[0][i] = nums[i]
  }
  // 递推计算 dp[i]
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (!dp[i]) {
        dp[i] = []
      }
      dp[i][j] = dp[i-1][j-1] * nums[j]
    }
  }
  // 统计小于k的个数
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (dp[i][j] < k) {
        result ++
      }
    }
  }
  return result
};

// 前面解法会超出空间，改进到只保留单行结果，仍然会超时
var numSubarrayProductLessThanKImprove = function(nums, k) {
  let currentDp = []
  // 计算当前行的值(即长度为1的情况)
  // 边计算边统计
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < k) {
      currentDp[i] = nums[i]
      if (currentDp[i] < k) {
        result ++
      }
    }
  }
  // 递推计算下一个长度的dp
  let nextDp = []
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (currentDp[j-1] && currentDp[j-1] * nums[j] < k) {
        nextDp[j] = currentDp[j-1] * nums[j]
        result ++
      }
    }
    currentDp = nextDp
    nextDp = []
  }
  return result
};

// 计算过程中有大量undefined，改用Map来存储每层的值(超时，本题使用 dp 应该是无法在限制时间内完成的，测试用例太变态）
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanKImprove2 = function(nums, k) {
  let currentDp = new Map()
  // 计算当前行的值(即长度为1的情况)
  // 边计算边统计
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < k) {
      currentDp.set(i, nums[i])
      result ++
    }
  }
  // 递推计算下一个长度的dp
  for (let i = 1; i < nums.length; i++) {
    let nextDp = new Map()
    // 循环 currentDp，递推 nextDp
    currentDp.forEach((value, key) => {
      if (value * nums[key+1] < k) {
        nextDp.set(key+1, value * nums[key+1])
        result ++
      }
    })
    currentDp = nextDp
  }
  return result
}
