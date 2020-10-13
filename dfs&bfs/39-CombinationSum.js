/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
  //
  let result = []
  dfs(candidates, [], target, result)
  return result
}

// 使用深度优先搜索
function dfs(candidates, path, target, result) {
  if (target < 0) return
  // 加入限制条件避免重复，值只能从小到大排列
  candidates.filter(v => path.length ===0 || v >= path[path.length -1]).forEach(v => {
    if (v === target) {
      result.push([...path, v])
    } else {
      dfs(candidates, [...path, v], target - v, result)
    }
  })
}

const candidates = [2,3,6,7]
const target = 7
combinationSum(candidates, target)
