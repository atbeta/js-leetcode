/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0
  // 先找到所有的1，然后从头开始循环
  // 取出一个1，如果该1没有被访问过，岛屿加1
  // 将该1相邻的1加入，并将该1标记为访问过
  let visitMap = new Map()
  let result = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // 如果当前值是1，检查该1是否已经访问过，如果没有访问过
      // 岛屿数量加1，并以此1开始BFS
      if (grid[i][j] === '1' && !visitMap.get(`i${i}j${j}`)) {
        result ++
        // bfs 开始
        let queue = []
        queue.push([i,j])
        while (queue.length) {
          let current = queue.shift()
          // 将 current 标记为已访问，将 current 相邻的 1 加入队列
          if (!visitMap.get(`i${current[0]}j${current[1]}`)) {
            visitMap.set(`i${current[0]}j${current[1]}`, true)
            // 向下
            if (current[0] + 1 < grid.length && grid[current[0]+1][current[1]]==='1') {
              queue.push([current[0] + 1, current[1]])
            }
            // 向右
            if (current[1] + 1 < grid[0].length && grid[current[0]][current[1]+1] === '1') {
              queue.push([current[0], current[1] + 1])
            }
            // 向上
            if (current[0] - 1 >= 0 && grid[current[0]-1][current[1]] === '1') {
              queue.push([current[0]-1, current[1]])
            }
            // 向左
            if (current[1] - 1 >= 0 && grid[current[0]][current[1]-1] === '1') {
              queue.push([current[0], current[1] - 1])
            }
          }
        }
      }
    }
  }
  return result
}
