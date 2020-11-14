/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
  if (nums.length === 0) return 0
  // dp[i] 以第i位置结尾乘积为正或负的最长子数组长度
  // negativeDp 和 positiveDp 定义这两个递推
  // negativeDp[0] = 如果 nums[0]为负则为1，为正或0则为0
  // positiveDp[0] = 如果 nums[0]为正则为1，为负或0则为0
  // negativeDp[i] = 看当前位置，如果是负则为 positiveDp[i-1] + 1,如果是正则为 negativeDp[i-1] + 1，如果是0，全部是0
  // positiveDp[i]，同样看当前位置，如果是正则为positiveDp[i-1] + 1，如果是负则为 negativeDp[i-1] + 1，如果是0，全部是0
  // 前面规则需要注意，如果i-1位置上值是0的话，不能盲目加1，需要检查当前位置
  let positiveDp = []
  let negativeDp = []
  if (nums[0] > 0) {
    positiveDp[0] = 1
  } else {
    positiveDp[0] = 0
  }
  if (nums[0] < 0) {
    negativeDp[0] = 1
  } else {
    negativeDp[0] = 0
  }
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > 0) {
      negativeDp[i] = negativeDp[i-1] > 0 ? negativeDp[i-1] + 1 : 0
      positiveDp[i] = positiveDp[i-1] + 1
    }
    if (nums[i] < 0) {
      negativeDp[i] = positiveDp[i-1] + 1
      positiveDp[i] = negativeDp[i-1] > 0 ? negativeDp[i-1] + 1 : 0
    }
    if (nums[i] === 0) {
      positiveDp[i] = 0
      negativeDp[i] = 0
    }
  }
  return Math.max(...positiveDp)
};
