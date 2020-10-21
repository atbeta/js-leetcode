/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  // 要匹配括号时，把 love 拿出来了，把括号拿走，这时再放回去，需要出来和回去顺序不一样，通过队列走一遍正好相反
  let stack = []
  let wordQueue = [] // 当遇到右括号匹配左括号时，在找到左括号之前遇到的字母放到队列中，最后再出队列回去，就会反向
  let p = 0
  while (p < s.length) {
    let current = s[p]
    if (current !== ')') {
      stack.push(current)
    } else {
      while (stack[stack.length - 1] !== '(') {
        wordQueue.push(stack.pop())
      }
      stack.pop() // 将左括号出栈
      // 将字母放回去
      while (wordQueue.length > 0) {
        stack.push(wordQueue.shift())
      }
    }
    p ++
  }
  return stack.join('')
};
