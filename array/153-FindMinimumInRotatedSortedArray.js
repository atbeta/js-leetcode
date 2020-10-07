/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    if (nums[right] >= nums[left]) return nums[left]
    let mid = (left + right) >> 1
    if (nums[mid] < nums[left]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
};
