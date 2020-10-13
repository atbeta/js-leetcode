/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let result = []
  let nums = []
  for (let i=0;i<n;i++) {
    nums[i] = i + 1
  }
  dfs(nums, [], k, result)
  return result
};

function dfs(nums, path, len, result) {
  if (nums.length + path.length < len) return
  for (let i = 0; i < nums.length; i++) {
    if (path.length === len - 1) {
      result.push([...path, nums[i]])
    } else {
      dfs(nums.slice(i+1),[...path, nums[i]], len, result)
    }
  }
}

