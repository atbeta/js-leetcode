/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
  if (A.length === 1) return A[0]
  // 结果可能是在原数组范围中，也可能是在环中
  // 如果在原数组范围中，那么与无环情况下结果一致
  // 如果是在环中，那么 A[0]和A[A.length-1]一定会被选中，将问题转化为求A.slice(1,A.length-1)的最小和子数组
  // 计算原数组最大值
  let lastMax = A[0]
  let max = lastMax
  for (let i = 1;i < A.length; i++) {
    let currentMax = lastMax > 0 ? lastMax + A[i] : A[i]
    if (currentMax > max) {
      max = currentMax
    }
    lastMax = currentMax
  }
  // 计算有环最大值 = 总和 - 除首尾外中间部分中最小连续子和
  // 计算A的总和
  let sum = A.reduce((pre,cur) => pre + cur, 0)
  let maxWithCircle = sum - minSubarray(A.slice(1, A.length-1))
  return Math.max(maxWithCircle, max)
};

function minSubarray(nums) {
  let lastMin = nums[0]
  let min = lastMin
  for (let i = 1; i < nums.length; i++) {
    let currentMin = lastMin < 0 ? lastMin + nums[i] : nums[i]
    if (currentMin < min) {
      min = currentMin
    }
    lastMin = currentMin
  }
  return min
}
