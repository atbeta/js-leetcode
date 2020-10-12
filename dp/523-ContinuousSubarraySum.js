/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  // dp[i][j]表示长度为i+1，以j为结尾的子数组的和
  // 为了节约空间，只记录当前行
  let currentDp = []
  // 初始化长度为1的情况
  for (let i = 0; i < nums.length; i++) {
    currentDp[i] = nums[i]
  }
  // 递推每一行，如果过程中发现了有k的倍数，直接结束
  // 需要注意0的处理
  for (let i = 1; i < nums.length; i++) {
    let nextDp = []
    for (let j = i; j < nums.length; j++) {
      nextDp[j] = currentDp[j-1] + nums[j]
      if (nextDp[j] === 0 && k === 0 || nextDp[j] % k === 0) {
        return true
      }
    }
    currentDp = nextDp
  }
  return false
};
