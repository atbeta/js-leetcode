/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    if (nums[right] >= nums[left]) {
      break
    }
    let mid = (left + right) >> 1
    if (nums[mid] < nums[left]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  // 因为有重复元素，非常容易跳出循环，需要在left到right间暴力查找
  for (let i = left; i < right; i++) {
    if (nums[i+1] < nums[i]) {
      return nums[i+1]
    }
  }
  // 也可能全部值相等
  return nums[left]
};
