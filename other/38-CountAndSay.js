/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
  const regex = /(\w)\1*/g
  if (n === 1) return '1'
  if (n === 2) return '11'
  const countList = countAndSay(n-1).match(regex)
  let result = ''
  for (let v of countList) {
    result += `${v.length}${v[0]}`
  }
  return result
}
