/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  // 将字符入栈，计数一个累加值，当满足累加值时，出栈，不断重复
  let stack = []
  let str = s.split('')
  // str.shift(), stack.push()，结束条件是str为空
  // 除了记录当前的记数，还需要记录之前的记数，出栈连续字符后，栈顶会恢复到上一个字符，其记数需被记录,我们同样使用栈来记录
  let countStack = []
  while (str.length > 0) {
    let current = str.shift()
    if (stack.length === 0) {
      stack.push(current)
      countStack.push(1)
    } else if (stack.length && current === stack[stack.length - 1] && countStack[countStack.length - 1] === k - 1) {
      // 出栈 k - 1个
      for (let i = 0; i < k - 1; i++) {
        stack.pop()
      }
      countStack.pop() // 当前记数删除
      // 否则比较 current 与栈顶，入栈，如果一致，count ++，不一致，count = 1
    } else if (stack.length && current === stack[stack.length - 1]) {
      stack.push(current)
      countStack[countStack.length - 1]++
    } else {
      stack.push(current)
      countStack.push(1)
    }
  }
  return stack.join('')
}
