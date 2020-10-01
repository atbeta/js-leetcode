/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  if (nums.length <= 2) return nums.length
  let point = 0
  while (point + 2 < nums.length) {
    if (nums[point] !== nums[point+2]) {
      point++
    } else {
      nums.splice(point+2, 1)
    }
  }
  return nums.length
}
