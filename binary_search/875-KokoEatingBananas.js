/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  // 如果 H < piles.length，不可能吃掉所有香蕉, H >= piles.length
  // 必须要大于 piles 的和除以 H，必须要小于 piles的最大值
  // 使用二分法逼近
  let sum = piles.reduce((pre,cur) => pre + cur, 0)
  let min = Math.ceil(sum/H)
  let max = Math.max(...piles)
  while (min < max) {
    let mid = (min + max) >> 1
    // 检查以 mid 速度吃能不能吃完，如果能吃完，说明可能更小
    if (check(mid, piles, H)) {
      max = mid // 这里不能是 mid - 1
    } else {
      // 如果吃不完，说明值太小，需要增加
      min = mid + 1
    }
  }
  return min
}

// 检查以K的速度吃香蕉能否吃完，模拟吃香蕉
function check(K, piles, H) {
  let hours = 0
  for (let i = 0; i < piles.length; i++) {
    hours += Math.ceil(piles[i] / K)
    if (hours > H) {
      return false
    }
  }
  return hours <= H
}
