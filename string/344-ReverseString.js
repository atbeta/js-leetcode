/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 题目约束原地反转，空间复杂度O(1)
const reverseString = function(s) {
  let start = 0
  let end = s.length - 1
  while (start < end) {
    let temp = s[start]
    s[start] = s[end]
    s[end] = temp
    start++
    end--
  }
}

