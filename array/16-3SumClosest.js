/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 固定其中一个值，转化为两数和最接近某值问题
var threeSumClosest = function(nums, target) {
  let closest
  for (let i=0;i<nums.length;i++) {
    // 包括 nums[i]时最接近target的组合
    let currentNums = [...nums.slice(0,i), ...nums.slice(i+1)]
    let currentClosest = findMin(currentNums, target-nums[i]) + nums[i] // 包括 nums[i]时的最接近的值
    if (closest === undefined || Math.abs(currentClosest - target) < Math.abs(closest - target)) {
      closest = currentClosest
    }
  }
  return closest
};

// 从给定数字中找到2个数字和最接近target
function findMin(nums, target) {
  let closest
  // 暴力方法
  for (let i=0;i<nums.length;i++) {
    for (let j=0;j<nums.length;j++) {
      if (i===j) continue
      if (closest === undefined || Math.abs(nums[i] + nums[j] - target) < Math.abs(closest - target)) {
        closest = nums[i] + nums[j]
      }
    }
  }
  return closest
}
