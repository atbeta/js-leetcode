/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  // 只有二进制位数相同时值才不为零，即m和n之间的倍数差异在2倍以内
  if (n >> 1 >= m) return 0
  // 直接暴力会超时，通过右移找最左侧公共二进制位
  // offset 记录右移位数，最后被全为0即可
  let offset = 0
  while (m !== n) {
    m = m >> 1
    n = n >> 1
    offset++
  }
  return m << offset
}
