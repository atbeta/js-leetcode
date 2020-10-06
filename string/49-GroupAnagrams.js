/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 暴力方法，速度较慢，5.01% 61.14%
var groupAnagrams = function(strs) {
  let result = []
  while (strs.length) {
    let current = strs.shift()
    let used = false // 记录是否使用了本次循环的单词，未使用创建新的分组
    for (let i=0;i<result.length;i++) {
      if (isAnagram(result[i][0], current)) {
        result[i].push(current)
        used = true
        break
      }
    }
    if (!used) {
      result.push([current])
    }
  }
  return result
};

function isAnagram(word1, word2) {
  if (word1.length !== word2.length) return false
  return word1.split('').sort().join('') === word2.split('').sort().join('');
}
