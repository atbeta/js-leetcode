/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  // 对于括号类的问题，尽量统一到用栈处理，减少思考难度
  // 要移除无效括号，就要找到这些无效括号，怎么找呢
  // 在匹配括号时，遇到左括号我们都直接入栈，遇到右括号则会去找左括号一起出栈
  // 如果遇到右括号，却找不到左括号来匹配，那么这个右括号就是无效的
  // 如果字符串处理完毕，却仍然有左括号没有被匹配，那么这个左括号就是无效的
  // 为了跟踪这种状态，我们不再通过出入栈这种模式，而是增加一个匹配状态数组
  // 对于找不到匹配的左括号的右括号，我们不入栈，而对于能找到的，则不是将左括号出栈，而是将右括号也入栈，同时标记这个左括号是有效的
  // 对于非括号字符，直接入栈不处理
  let stack = []
  let valid = [] // 左括号入栈时默认都是 false,字符和右括号都是true，不合法的右括号没有入栈的机会不用管
  let p = 0
  while (p < s.length) {
    let current = s[p]
    if (current === '(') {
      stack.push(current)
      valid.push(false)
    }
    if (/\w/.test(current)) {
      stack.push(current)
      valid.push(true)
    }
    if (current === ')') {
      // 如果是右括号，从栈里找最近的false的左括号
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i] === '(' && valid[i] === false) {
          valid[i] = true
          stack.push(current)
          valid.push(true)
          break
        }
      }
      // if (i === -1) {
      //   // 这说明没找到能匹配的左括号，就不用处理了
      // }
    }
    p++
  }
  return stack.filter((_, index) => valid[index]).join('')
};
