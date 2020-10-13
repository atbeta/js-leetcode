// 统计优美子数组
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var numberOfSubarrays = function(nums, k) {
//   // 利用前缀和统计序号i元素前有多少个奇数
//   let prefix = []
//   prefix[0] = 0
//   for (let i = 1; i <= nums.length; i++) {
//     prefix[i] = prefix[i-1] + (nums[i-1] % 2 === 1 ? 1 : 0)
//   }
//   let result = 0
//   // 问题转化成了两数差问题，prefix中两数差如果 = k，则有一对
//   // 先使用暴力方法
//   for (let i = 0; i < prefix.length; i++) {
//     for (let j = i + 1; j < prefix.length; j++) {
//       if (prefix[j] - prefix[i] === k) {
//         result ++
//       }
//     }
//   }
//   return result
// };
// 优化为使用 Map
// 拿到一个前缀和prefix，如果有另一个前缀和正好是prefix+k，这就形成了一组结果
// 我们使用Map统计某前缀和出现的次数，遍历所有前缀和的值，result += Map(前缀和+k)
var numberOfSubarrays = function(nums, k) {
  let prefixMap = new Map()
  prefixMap.set(0, 1)
  let prefixSum = 0
  for (let i = 1; i < nums.length + 1; i++) {
    prefixSum += (nums[i - 1] % 2 === 1 ? 1 : 0)
    if (!prefixMap.get(prefixSum)) {
      prefixMap.set(prefixSum, 1)
    } else {
      prefixMap.set(prefixSum, prefixMap.get(prefixSum) + 1)
    }
  }
  // 遍历前缀和
  let result = 0
  prefixMap.forEach((value, key) => {
    if (prefixMap.get(key + k)) {
      result += value * prefixMap.get(key + k)
    }
  })
  return result
}
