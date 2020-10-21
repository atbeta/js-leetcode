/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function(n) {
  if (n === 0) {
    return 0
  }
  if (n <= 3) {
    return 1
  }
  let str = '122'
  let arr = ['1', '22']
  let mapInt = {
    '1': 1,
    '2': 2
  }
  let p = 2 // p 是奇数就是1 p 是偶数就是 2  p % 2 + 1
  let count = 1
  while (p <= n - 1) {
    if (str[p] === '1') {
      count ++
    }
    let current = p % 2 === 1 ? '2' : '1'
    arr.push(current.repeat(mapInt[str[p]]))
    str = str + arr[arr.length - 1]
    p ++
  }
  return count
}
