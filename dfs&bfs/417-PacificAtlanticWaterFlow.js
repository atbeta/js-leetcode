/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
// 12.05% 5.41%，待优化
var pacificAtlantic = function(matrix) {
  if (matrix.length === 0) return []
  if (matrix[0].length === 0) return []
// 能流动到太平洋：有通向x=0或者y=0节点的路径
// 能流动到大西洋：有通向x=m-1或者y=n-1的路径
// 获取一个能流动到太平洋的数组，再获取一个能流动到大西洋的数组，取并集
  let m = matrix.length
  let n = matrix[0].length
  let pacificQueue = []
  let pacificResult = []
  let atlanticQueue = []
  let atlanticResult = []
// 使用 BFS 处理
// 记录访问情况
  let pacificVisitMap = new Map()
  let atlanticVisitMap = new Map()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      //检查当前节点，初始化两个队列
      if (isNearPacific([i,j])) {
        pacificQueue.push([i,j])
        pacificVisitMap.set(`x${i}y${j}`, true)
      }
      if (isNearAtlantic([i,j], m, n)) {
        atlanticQueue.push([i,j])
        atlanticVisitMap.set(`x${i}y${j}`, true)
      }
    }
  }
// 初始化队列完毕，开始各自 BFS
// 太平洋 BFS
  while (pacificQueue.length) {
    let current = pacificQueue.shift()
    pacificResult.push(current)
    let [x,y] = current
    // 将能够流动到的且未访问过的位置加入队列 => 排除掉已经初始化加入列表的点
    let neighbours = []
    // 向左
    if (y-1 >= 0) {
      neighbours.push([x,y-1])
    }
    // 向右
    if (y+1 <= n - 1) {
      neighbours.push([x, y+1])
    }
    // 向上
    if (x-1 >= 0) {
      neighbours.push([x-1,y])
    }
    // 向下
    if (x+1 <= m - 1) {
      neighbours.push([x+1, y])
    }
    neighbours
    .forEach(pos => {
      let [i, j] = pos
      if (matrix[i][j] >= matrix[x][y] && !pacificVisitMap.get(`x${i}y${j}`)) {
        pacificQueue.push([i,j])
        pacificVisitMap.set(`x${i}y${j}`, true)
      }
    })
  }
// 大西洋BFS
// 访问代码几乎完全一样
  while (atlanticQueue.length) {
    let current = atlanticQueue.shift()
    atlanticResult.push(current)
    let [x,y] = current
    // 将能够流动到的且未访问过的位置加入队列
    let neighbours = []
    // 向左
    if (y-1 >= 0) {
      neighbours.push([x,y-1])
    }
    // 向右
    if (y+1 <= n - 1) {
      neighbours.push([x, y+1])
    }
    // 向上
    if (x-1 >= 0) {
      neighbours.push([x-1,y])
    }
    // 向下
    if (x+1 <= m - 1) {
      neighbours.push([x+1, y])
    }
    neighbours.forEach(pos => {
      let [i, j] = pos
      if (matrix[i][j] >= matrix[x][y] && !atlanticVisitMap.get(`x${i}y${j}`)) {
        atlanticQueue.push([i,j])
        atlanticVisitMap.set(`x${i}y${j}`, true)
      }
    })
  }
  pacificResult = pacificResult.map(item => `x${item[0]}y${item[1]}`)
  atlanticResult = atlanticResult.map(item => `x${item[0]}y${item[1]}`)
  let result = []
  pacificResult.forEach(item => {
    if (atlanticResult.includes(item)) {
      result.push(item)
    }
  })
  return result.map(item => {
    return item.match(/\d+/g).map(v => parseInt(v))
  })
};

function isNearPacific(pos) {
  return pos[0] === 0 || pos[1] === 0
}
function isNearAtlantic(pos, m, n) {
  return pos[0] === m - 1 || pos[1] === n - 1
}

