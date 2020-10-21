/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  // 是否有升降这样一个过程
  // 什么是升？出现一个后面的比前面的大
  // 什么是降，出现一个后面的出前面的小
  // 从头到尾循环一次确定每个数字前面是否有比他小的，如果有，数组就为该值，如果没有，则为false
  // 再从尾到头循环一次看每个数字后面是否有比他大的，如果有，就为该值，否则就为 false
  // 如果存在数字同时满足上面两边，就输出即可
  let isUp = []
  let isDown = []
  isUp[0] = false
  isDown[nums.length - 1] = false
  let minLeft = nums[0]
  let minRight = nums[nums.length - 1] // 右边需要记录的是比 minLeft 大 但又比 nums[i]小的值
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > minLeft) {
      isUp[i] = minLeft
    } else {
      isUp[i] = false
      minLeft = nums[i]
    }
  }
  // 找右侧满足递降，且递降值中最大的要大于 对应的 minLeft
  for (let i = nums.length - 2; i >= 1; i--) {
    if (isUp[i] !== false) {
      // 只有左侧满足不是 false 时，才可能满足条件
      // 需要检查在 i 位置右侧是否有满足 大于 isUp[i]又小于 nums[i]的数字
      // 先暴力搜索试试
      for (let j = i + 1; j < nums.length; j ++) {
        if (nums[j] < nums[i] && nums[j] > isUp[i]) {
          return true
        }
      }
    }
  }
  return false
};
