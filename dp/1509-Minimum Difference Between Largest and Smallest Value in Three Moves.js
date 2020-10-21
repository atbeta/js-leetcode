/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
  // 将数组排序
  // 可能的移动只会发生在前3大和前3小的移动上
  // 合计移动3个数字，从前3大到第四大、前2大到第3大加前1小到第2小、前1大到第2天加前2小到第3小...
  // 我们不需要计算，只需要先计算一个原最大值
  // 然后分别减去可能会被减少的差值即可
  if (nums.length <= 4) {
    return 0
  }
  let numsSorted = nums.sort((a,b) => a - b)
  let max = numsSorted[numsSorted.length - 1] - numsSorted[0]
  // 计算所有可能会被减的值，找到最大值
  let decrement = []
  for (let i = 0; i <=3; i++) {
    // i 表示移动几个最大数字，比如 i = 0 表示移动 0 个最大数字，同时移动3-0 = 3个最小数字
    // 将2部分减少的差值加起来，放到数组中
    decrement.push(numsSorted[3-i] - numsSorted[0] + numsSorted[numsSorted.length - 1] - numsSorted[numsSorted.length - 1 - i])
  }
  // 从数组中找到最大值，用 max 减掉即是结果
  return max - Math.max(...decrement)
};
