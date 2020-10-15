/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let existMap = new Map()
  while (!existMap.get(n) && n !== 1) {
    existMap.set(n, true)
    n = calcHappy(n)
  }
  return n===1
}

function calcHappy(n) {
  let sum = 0
  while (n > 0) {
    sum += (n % 10)**2
    n = Math.floor(n/10)
  }
  return sum
}
