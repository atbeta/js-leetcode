/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// 利用了图的拓扑排序，效率待优化
var canFinish = function(numCourses, prerequisites) {
  return canToplogicalSort(numCourses, prerequisites)
};

// 通过prerequisites统计各节点入度
function calcIndegree(numCourses, prerequisites) {
  let result = []
  for (let i = 0;i < numCourses; i++) {
    result[i] = 0
  }
  for (let i = 0;i < prerequisites.length; i++) {
    result[prerequisites[i][0]] ++
  }
  return result
}
function canToplogicalSort(numCourses, prerequisites) {
  let visited = new Map()
  let result = []
  while (result.length < numCourses) {
    // 计算当前各节点的入度
    let indegree = calcIndegree(numCourses, prerequisites)
    // 如果没有入度为0的节点，说明无法拓扑排序
    if (!indegree.some((v, i) => !visited.get(i) && v === 0)) {
      break
    }
    // 将所有入度为0的节点出发的边删除
    for (let i = 0; i < indegree.length; i++) {
      if (indegree[i] === 0 && !visited.get(i)) {
        result.push(i)
        visited.set(i, true)
        // 删除所有 prerequisites 中对应的边
        for (let j = 0;j < prerequisites.length; j++) {
          if (prerequisites[j][1] === i) {
            prerequisites.splice(j, 1)
            j--
          }
        }
      }
    }
  }
  return result.length === numCourses
}
