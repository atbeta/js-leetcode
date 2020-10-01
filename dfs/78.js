/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = []
  dfs(nums, [], result)
  return result.map(item => {
    for (let i=0;i<item.length;i++) {
      // 需处理有零的情况
      if (nums[i] === 0 && item[i] !== 0) {
        item[i] = '0'
      } else {
        item[i] = nums[i] * item[i]
      }
    }
    return item.filter(v => v!==0)
  })
};

function dfs(nums, path, result) {
  if (path.length === nums.length - 1) {
    result.push([...path, 0])
    result.push([...path, 1])
  } else {
    dfs(nums, [...path, 0], result)
    dfs(nums, [...path, 1], result)
  }
}
