/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  // 栈每次清空都说明找到了一个原语，当读到右括号进行匹配时，如果发现要匹配的左括号是栈中最后一个元素，就直接将这一对括号丢弃
  // 另外，为了打印结果，增加一个 result 数组
  let stack = []
  let removeMap = new Map() // 记录哪些位置应该被删除
  removeMap.set(0, true)
  let p = 0
  while (p < S.length) {
    let current = S[p]
    if (current === '(') {
      stack.push(current)
    } else {
      if (stack.length === 1) {
        removeMap.set(p, true)
        // 下一个位置肯定也要删除
        if (p + 1 < S.length) {
          removeMap.set(p + 1, true)
        }
      }
      stack.pop()
    }
    p++
  }
  let result = ''
  for (let i = 0; i < S.length; i++) {
    if (!removeMap.get(i)) {
      result += S[i]
    }
  }
  return result
};
