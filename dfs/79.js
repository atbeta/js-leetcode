/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// 7.29% beat，待优化
var exist = function(board, word) {
  let m = board.length
  let n = board[0].length
  let startPosList = []
  for (let i=0;i<m;i++) {
    for (let j=0;j<n;j++) {
      if (board[i][j] === word[0]) {
        startPosList.push([i,j])
      }
    }
  }
  // 循环找到所有与单词起点相同的位置
  // 对每个位置进行深度优先搜索
  let result = []
  let i = 0
  while (i < startPosList.length) {
    let hasResult = dfs(board, startPosList[i] ,word.substring(1),[startPosList[i]],result)
    if (hasResult) return true
    i++
  }
  return false
}

function dfs(board, pos, remainWord, path, result) {// direction 是可以移动的方向
  // 处理特殊情况
  if (remainWord === '') {
    result.push(path)
    return true
  }
  // 找到当前pos周围的位置，要排除掉path中最后一个
  let newPosList = [] // 根据pos和path计算新的可跳转位置
  // 上方
  if (pos[0] > 0) {
    newPosList.push([pos[0]-1,pos[1]])
  }
  // 下方
  if (pos[0] < board.length - 1) {
    newPosList.push([pos[0]+1,pos[1]])
  }
  // 左侧
  if (pos[1] > 0) {
    newPosList.push([pos[0],pos[1]-1])
  }
  // 右侧
  if (pos[1] < board[0].length - 1) {
    newPosList.push([pos[0], pos[1]+1])
  }
  // 筛选已走过节点
  let pathStringList = path.map(item => item.join(','))
  newPosList = newPosList.filter(p => {
    return !pathStringList.includes(p.join(','))
  })
  let hasResult = false
  for (let i = 0; i < newPosList.length; i++) {
    let newPos = newPosList[i]
    if (board[newPos[0]][newPos[1]]===remainWord[0]) {
      if (remainWord.length === 1) {
        result.push([...path, newPos])
        return true
      } else {
        hasResult = hasResult || dfs(board, newPos, remainWord.substring(1), [...path, newPos], result)
      }
    }
  }
  return hasResult
}
