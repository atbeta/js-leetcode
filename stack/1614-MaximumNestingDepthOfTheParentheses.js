/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let result = 0
  let currentMax = 0
  // 入栈出栈
  let arr = s.split('').filter(v => v === '(' || v === ')')
  let stack = []
  while (arr.length) {
    let current = arr.shift()
    if (stack.length === 0 || current === '(') {
      result = Math.max(stack.length + currentMax, result)
      currentMax = 0
      stack.push(current)
    } else {
      // 当前为右括号了，需要出栈了
      stack.pop()
      currentMax ++
    }
  }
  return Math.max(currentMax, result)
}
