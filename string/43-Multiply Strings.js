/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  // 边界
  if (num1 === '0' || num2 === '0') {
    return '0'
  }
  // 模拟乘法
  let arr = [] // 存放每一位乘法计算计符串
  // 我们从num2的低位开始乘
  let len2 = num2.length
  let len1 = num1.length
  for (let i = len2 - 1;i >=0;i--) {
    let carry = 0
    let current = '0'.repeat(len2-1-i)
    // 计算 num1 * num2[i]的字符串结果
    for (let j = len1 - 1;j >=0;j--) {
      // 当前位 = parseInt(num2[j]) * parseInt(num1[i]) + carry ，需要对10取余
      // 新的 carry =
      let currentValue = parseInt(num2[i]) * parseInt(num1[j]) + carry
      current = `${currentValue % 10}${current}`
      carry = Math.floor(currentValue / 10)
    }
    if (carry > 0) {
      current = `${carry}` + current
    }
    arr.push(current)
  }
  // 将 arr 中的字符串加起来
  return arr.reduce((pre, cur) => add(pre, cur), '')
};

function add(str1, str2) {
  // 计算两个字符串相加
  // 从最低位开始加
  let p1 = str1.length - 1
  let p2 = str2.length - 1
  let carry = 0
  let result = ''
  while (p1 >=0 || p2 >=0) {
    // 有一个还没结束就继续加
    let add1 = p1 >= 0 ? parseInt(str1[p1]) : 0
    let add2 = p2 >= 0 ? parseInt(str2[p2]) : 0
    let current = add1 + add2 + carry
    result = `${current % 10}` + result
    carry = Math.floor(current / 10)
    p1--
    p2--
  }
  if (carry > 0) {
    result = '1' + result
  }
  return result
}
