/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 直接暴力 DFS，将火柴分配到4个分组中，尝试将火柴向4个分组中分配
var makesquare = function(nums) {
  if (nums.length === 0) return false
  let sum = nums.reduce((pre, cur) => pre + cur, 0)
  if (sum % 4 !== 0) return false
  let k = sum / 4
  let path = [0,0,0,0]
  return dfs(nums, 0, k, path)
};

// path 表示第每一根火柴的分组，比如第0根火柴在第2组
function dfs(nums, n, k, path) {
  // 检查是否合法，检查是否完成分配
  if (path.every(v => v === k)) {
    return true
  }
  // 如果将第i根火柴放入某一组，不超出k
  for (let i = 0;i < 4; i++) {
    if (path[i] + nums[n] <= k) {
      path[i] += nums[n]
      if (dfs(nums, n+1, k, path)) {
        return true
      }
      path[i] -= nums[n]
    }
  }
  return false
}
