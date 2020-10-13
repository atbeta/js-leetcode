/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
// 5960ms，测试数据非常大，待优化
var subarraysDivByK = function(A, K) {
  let prefixMap = new Map()
  let prefixSum = 0
  let max = Number.MIN_SAFE_INTEGER
  let min = Number.MAX_SAFE_INTEGER
  for (let i = 0; i <= A.length; i++) {
    if (i === 0) {
      prefixSum = 0
    } else {
      prefixSum += A[i-1]
    }
    if (!prefixMap.get(prefixSum)) {
      prefixMap.set(prefixSum, 1)
    } else {
      prefixMap.set(prefixSum, prefixMap.get(prefixSum) + 1)
    }
    if (prefixSum > max) {
      max = prefixSum
    }
    if (prefixSum < min) {
      min = prefixSum
    }
  }
  // 循环 prefixMap，每次加上 K 的倍数，看是否有map值，如果有 result += 二者相乘
  // 已经计算了最大值和最小值，可能需要加的K的倍数最大为(max-min)/K
  let result = 0
  let maxMultiply = Math.floor((max - min) / K )
  // 下面计算子组合和为0的情况，需要计算阶乘，因为已经知道了次数的最大值，只需要计算最大 max-1 的阶乘
  // 需要找到最大的次数
  prefixMap.forEach((count, prefix) => {
    // 找到差为 K 的倍数的，循环 maxMultiply 次，并查找
    for (let i = 1; i <= maxMultiply; i++) {
      if (prefix + i * K > max) {
        break
      }
      if (prefixMap.get(prefix + i * K)) {
        result += count * prefixMap.get(prefix + i * K)
      }
    }
    // 前面的统计没有统计到前缀和相等的情况，这表示这部分子数组的和为0，比如我有3个前缀和为3的情况，比如是前1个前2个前3个元素前缀和都为3，实际上这表示 1到2 2到3 1到3 3种情况子数组和为0，计算方式为其组合,我们需要统计这种情况
    result += (count * (count-1)) / 2
  })

  return result
};
