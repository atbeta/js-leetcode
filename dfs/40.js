/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 本题关键是去重，其他部分与39题相差不大, 目前算法效率较差，待优化
// 使用 map 最容易理解，将值与该值的数量进行映射
const combinationSum2 = function(candidates, target) {
  const candidatesSorted = candidates.sort((a,b) => a - b)
  let candidatesMap = new Map()
  for (let i = 0; i < candidates.length; i++) {
    if (!candidatesMap.has(candidatesSorted[i])) {
      candidatesMap.set(candidatesSorted[i], 1)
    } else {
      candidatesMap.set(candidatesSorted[i], candidatesMap.get(candidatesSorted[i]) + 1)
    }
  }
  // 将 candidatesMap 进行处理
  let result = []
  dfs(candidatesMap, [], [], target, result)
  return result
}

// 使用深度优先搜索
function dfs(candidatesMap, used, path, target, result) {
  if (target < 0) return
  candidatesMap.forEach((value, key)=> {
    // 避免重复, 第一是通过 used 来控制，第二是通过排序来控制
    if (!used.includes(key) && (path.length === 0 || path[path.length - 1] < key)) {
      let values = []
      // 目前值key可以使用 1 - value 次
      for (let i = 1; i <= value; i++) {
        values.push(key)
        if (i * key === target) {
          result.push([...path, ...values])
        } else {
          dfs(candidatesMap, [...used, key], [...path, ...values], target - i*key, result)
        }
      }
    }
  })
}




const candidates = [10,1,2,7,6,1,5,2]
const target = 8


combinationSum2(candidates, target)
