/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let result = []
  dfs([], 0, k, n, result)
  return result
};

function dfs(used, sum, k, n, result) {
  if (used.length > k) return
  if (sum > n) return
  if (sum === n && used.length === k) {
    result.push([...used])
  }
  for (let i = 1; i <= 9; i++) {
    // 为避免重复，要求后面的比前面的大
    if (!used.includes(i) && (used.length === 0 || i > used[used.length - 1])) {
      used.push(i)
      dfs(used, sum + i, k, n, result)
      used.pop()
    }
  }
}
