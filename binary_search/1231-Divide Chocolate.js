/**
 * @param {number[]} sweetness
 * @param {number} K
 * @return {number}
 */
var maximizeSweetness = function(sweetness, K) {
  let min = 0
  let max = 0
  for (let i = 0; i < sweetness.length; i++) {
    max += sweetness[i]
  }
  while (min < max - 1) {
    let mid = (min + max) >> 1
    if (check(mid, sweetness, K)) {
      // 如果这个数字能成功，说明可能小了
      min = mid
    } else {
      // 如果分不成功，说明数字大了，将数字减小试试
      max = mid - 1
    }
  }
  // 如果 min 和 max 不相等的话，要检查一下 max 是否可行，不可行结果就是 min
  if (min === max) {
    return min
  } else {
    return check(max, sweetness, K) ? max : min
  }
};

function check(num, sweetness, K) {
  // 尝试将蛋糕分成 K + 1份，每份都要大于等于num
  let pieces = 1
  let currentSum = 0
  for (let i = 0; i < sweetness.length; i++) {
    if (currentSum < num) {
      currentSum += sweetness[i]
    } else {
      pieces ++
      currentSum = sweetness[i]
    }
    if (pieces === K + 1 && currentSum >= num) {
      return true
    }
  }
  return false
};
