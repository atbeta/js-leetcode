/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function(S) {
  let p = 0
  let stack = []
  while (p < S.length) {
    let current = S[p]
    if (stack.length === 0 || current === '(') {
      // 直接入栈
      stack.push(current)
    } else {
      // 如果栈顶是数字，就全拿出来累加，遇到括号将累加的数字乘以2再加入栈
      // 如果未碰到数字直接碰到左括号，将1推入栈
      let sum = 0
      while (stack[stack.length - 1] !== '(' && stack[stack.length - 1] !== ')') {
        sum += stack.pop()
      }
      if (stack[stack.length - 1] === '(') {
        stack.pop()
        stack.push(sum > 0 ? sum * 2 : 1)
      }
    }
    p ++
  }
  return stack.reduce((pre, cur) => pre + cur, 0)
};
