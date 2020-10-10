/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let result = []
  dfs([], n, result)
  return result.length
};

function dfs(path, n, result) {
  // 根据 path 计算可以填的位置
  // 循环每一个位置，如果path长度=n-1,保存结果，否则继续递归
  let currentLine = path.length
  for (let i = 0; i < n; i++) {
    let pos = [currentLine, i]
    if (check(path, pos)) {
      if (currentLine === n - 1) {
        result.push([...path, i])
      } else {
        dfs([...path, i], n, result)
      }
    }
  }
}

// 通过前面行已经填的值，计算某位置(x,y)是否与之前值冲突
function check(path, pos) {
  let result = true // 默认该位置可用
  for (let i = 0; i < path.length; i++) {
    // 检查 [i,path[i]]与[pos[0],pos[1]]是否冲突
    // 同一行同一列
    if (i === pos[0] || path[i] === pos[1]) {
      return false
    }
    // 对角线
    if (pos[0]-i === pos[1]-path[i] || pos[0]-i+pos[1]-path[i] === 0) {
      return false
    }
  }
  return result
}


