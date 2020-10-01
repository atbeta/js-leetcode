/**
 * @param {string} path
 * @return {string}
 */
// 要注意 . 也可以作为合法的路径字符
const simplifyPath = function(path) {
  const stack = []
  stack.push('/')
  let p = 1
  while (p < path.length) {
    let top = stack[stack.length - 1]
    if (path.slice(p).startsWith('/')) {
      if (top!=='/') {
        stack.push('/')
      }
      p++
    }
    else if (/^\.\.(\/|$)/.test(path.slice(p))) {
      if (stack.length) {
        stack.pop()
      }
      if (stack.length) {
        stack.pop()
      }
      p+=2
    }
    // 当前是.时，如果后面是 / 则直接跳过，否则不处理
    else if (/^\./.test(path.slice(p)) && (path[p+1] === '/' || p === path.length - 1)) {
      p++
    }
    else if (/^\.*[\w.]*/.test(path.slice(p))) {
      let word = path.slice(p).match(/^\.*[\w.]*/)[0]
      stack.push(word)
      p+=word.length
    }
  }
  if (stack[stack.length - 1] === '/') {
    stack.pop()
  }
  if (stack.length === 0) return '/'
  return stack.join('')
}

