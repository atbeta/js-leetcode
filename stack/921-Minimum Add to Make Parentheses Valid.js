/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
  // 求出无效括号数量是不是就可以？
  let stack = []
  let valid = []
  let p = 0
  while (p < S.length) {
    let current = S[p]
    if (current === '(') {
      stack.push(current)
      valid.push(false)
    } else {
      // 向左找第一个是false的左括号，同时标记为 true
      // 如果找不到，入栈标记为 false
      for (let i = p; i >= 0; i--) {
        if (stack[i] === '(' && valid[i] === false) {
          valid[i] = true
          stack.push(current)
          valid.push(true)
          break
        }
        // 如果找到最后也没找到
        if (i === 0) {
          stack.push(current)
          valid.push(false)
        }
      }
    }
    p++
  }
  return valid.filter(item => item === false).length
};
