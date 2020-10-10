/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
  let n = M.length
  let visited = new Map()
  let count = 0
  for (let i = 0; i < n; i++) {
    if (!visited.get(i)) {
      // 找到一个未访问过的，就从这里开始 BFS
      count ++
      let queue = []
      queue.push(i)
      while (queue.length) {
        let current = queue.shift()
        visited.set(current, true)
        // 找到和 current 是朋友的，加入队列
        for (let j = 0; j < n; j++) {
          if (M[current][j] === 1 && !visited.get(j)) {
            queue.push(j)
          }
        }
      }
    }
  }
  return count
};
