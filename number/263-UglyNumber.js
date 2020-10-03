/**
 * @param {number} num
 * @return {boolean}
 */
// 暴力算法，一直除2除3除5是否能得到1
// 通过增加部分质数的排除，可以减少运行时间
var isUgly = function(num) {
  if (num <=0) return false
  if (num % 7 === 0) return false
  if (num % 11 ===0) return false
  if (num % 13 ===0) return false
  while (num % 2 ===0) {
    num = num >>1
  }
  while (num % 3 === 0) {
    num = Math.round(num / 3)
  }
  while (num % 5 === 0) {
    num = Math.round(num / 5)
  }
  return num === 1
};
