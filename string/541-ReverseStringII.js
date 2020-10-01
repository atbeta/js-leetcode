/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let p = 0
  let toReverse = true
  let result = ''
  while (p < s.length) {
    if (toReverse) {
      result+=reverse(s.substring(p,p+k))
      toReverse = false
      p+=k
    } else {
      result+=s.substring(p,p+k)
      toReverse = true
      p+=k
    }
  }
  return result
}

function reverse(s) {
  return s.split('').reverse().join('')
}
