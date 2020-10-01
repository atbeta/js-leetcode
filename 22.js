/**
 * @param {number} n
 * @return {string[]}
 */
// var generateParenthesis = function(n) {
//   if (n === 0) return []
//   if (n === 1) {
//     return ['()']
//   }
//   // n 与 n-1 关系
//   // 左 右 中
//   let result = []
//   generateParenthesis(n-1).forEach(item => {
//     result.push('()' + item)
//     result.push(item + '()')
//     result.push('(' + item + ')')
//   })
//   return result
// }
var generateParenthesis = function(n) {
  // dfs
  let result = []
  dfs(n,n,'',result)
  console.log(result)
}

function dfs(m, n, path='', result = []) {// m n 表示剩余的左括号和右括号，path表示目前已填充
  if (m < 0 || n < 0) return
  if (m === 0 && n === 0) {
    result.push(path)
  }
  if (m > n) return
  dfs(m-1, n, path + '(', result)
  dfs(m, n-1, path + ')', result)
}

generateParenthesis(4)

