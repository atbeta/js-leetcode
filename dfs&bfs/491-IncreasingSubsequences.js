/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  let result = []
  let visited = new Map()
  dfs(nums, 0, [], visited, result)
  return result.filter(item => item.length > 1)
};

// 使用 dfs
function dfs(nums, n, path, visited, result) {
  if (n > nums.length-1) return
  if (path.length === 0 || nums[n] >= path[path.length - 1]) {
    let str = [...path, nums[n]].toString()
    if (!visited.get(str)) {
      result.push([...path, nums[n]])
      visited.set(str, true)
    }
    dfs(nums, n+1, [...path, nums[n]], visited, result)
    dfs(nums, n+1, [...path], visited, result)
  } else {
    dfs(nums, n+1, [...path], visited, result)
    dfs(nums, n, [], visited, result)
  }
}

