/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
// 一个 bfs 解决问题
var floodFill = function(image, sr, sc, newColor) {
  let queue = []
  queue.push([sr,sc])
  let visited = new Map()
  let color = image[sr][sc] // 记录原颜色，因为后面会被覆盖
  while (queue.length) {
    let current = queue.shift()
    let [x, y] = current
    visited.set(`${x},${y}`, true)
    // 将 current 重新上色
    image[x][y] = newColor
    // 将上下左右中颜色与原颜色一样的加入队列
    let next = []
    // 向上
    if (x - 1 >= 0) {
      next.push([x-1, y])
    }
    // 向下
    if (x + 1 < image.length) {
      next.push([x+1, y])
    }
    // 向左
    if (y - 1 >= 0) {
      next.push([x, y-1])
    }
    // 向右
    if (y+1 < image[0].length) {
      next.push([x, y+1])
    }
    for (let i = 0; i < next.length; i++) {
      if (!visited.get(`${next[i][0]},${next[i][1]}`) && image[next[i][0]][next[i][1]] === color) {
        queue.push(next[i])
      }
    }
  }
  return image
};

// dfs: 从 pos 位置开始将颜色由 oldColor 替换为 newColor
var floodFill = function(image, sr, sc, newColor) {
  dfs(image, [sr,sc], image[sr][sc], newColor)
  return image
}

function dfs(image, pos, oldColor, newColor) {
  let [x, y] = pos
  // 如果超出范围，不处理
  if (x < 0 || x > image.length-1 || y < 0 || y > image[0].length-1) return
  // 如果颜色不是oldColor不处理
  if (image[x][y] !== oldColor) return
  // 如果颜色已经是 newColor了不处理
  if (image[x][y] === newColor) return
  // 修改颜色
  image[x][y] = newColor
  // 递归处理上下左右
  dfs(image, [x-1, y], oldColor, newColor)
  dfs(image, [x+1, y], oldColor, newColor)
  dfs(image, [x, y-1], oldColor, newColor)
  dfs(image, [x, y+1], oldColor, newColor)
}
