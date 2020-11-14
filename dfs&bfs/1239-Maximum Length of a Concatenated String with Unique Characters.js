/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
  let result = []
  dfs(arr, 0, '', result)
  return result[0]
};


function dfs(arr, k, current, result) {
  if (k === arr.length) {
    if (result.length === 0 || current.length > result[0]) {
      result[0] = current.length
    }
    return
  }
  // 如果当前的单词不包括current中的重复字符，即可以加上，也可以不加
  // 如果当前单词包括了current中的重复字符，只能不加
  let word = arr[k]
  let isValid = true
  for (let i = 0;i < word.length; i++) {
    // 要检查 word 本身是不是包含重复字符
    if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
      isValid = false
      break
    }
    // 检查目前已经拼接好的是不是包含已有字符
    if (current.includes(word[i])) {
      isValid = false
      break
    }
  }
  if (isValid) {
    dfs(arr, k+1, current+word, result)
  }
  dfs(arr, k+1, current, result)
}
