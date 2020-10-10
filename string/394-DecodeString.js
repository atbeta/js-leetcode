/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  // 找到数字时，把后面[]包的内容拿出来，递归
  // 递归结束条件，字符串中没有数字
  if (/\d/.test(s) === false) {
    return s
  }
  // 含有数字时，从头开始读字符处理
  let result = ''
  let p = 0
  while (p < s.length) {
    // 不是数字直接加入结果
    if (/\D/.test(s[p])) {
      result += s[p]
    } else {
      // 当遇到数字时
      // 先找到这个完整的数字
      let repeatCount = s[p]
      while (/\d/.test(s[p+1])) {
        p++
        repeatCount += s[p]
      }
      // 之后找到数字后[]包含的全部内容
      let subS = ''
      p++ // 移动一个位置，这个位置是左中括号
      let leftBracketsCount = 1 // 当右括号数量与左括号数字相同时就结束了查找
      let rightBracketsCount = 0
      while (leftBracketsCount !== rightBracketsCount) {
        p++
        subS += s[p]
        if (s[p] === '[') {
          leftBracketsCount ++
        }
        if (s[p] === ']') {
          rightBracketsCount ++
        }
      }
      // 需要将最后一个 ] 从 subS 中删除
      subS = subS.substring(0, subS.length - 1)
      // 递归处理这个 subS，并重复 repeatCount 次
      result += decodeString(subS).repeat(parseInt(repeatCount))
    }
    // 继续循环
    p++
  }
  return result
};
