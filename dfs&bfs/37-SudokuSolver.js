/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  // 找到第一个可填充位置
  // 判断目前缺少的位置
  // 填入数字，判断是否可行，如果可行，判断是否已经全部填充，打印答案，否则加入该数字，继续填充
  const dfs = () => {
    const pos = getFirstPosition(board)
    if(pos === null) {
      return true
    }

    for(let i = 1; i <= 9; i++) {
      const num = i.toString()
      const isValid = check(board, pos, num)
      if(isValid) {
        const [x, y] = pos
        board[x][y] = num
        if(dfs()) {
          return true
        }
        board[x][y] = '.'
      }
    }
    return false
  }
  dfs()
}

// 找到第一个缺失数字的位置
function getFirstPosition(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '.') {
        return [i,j]
      }
    }
  }
  return null
}
// 检查在board第1个缺失数字位置填入num是否有效
function check(board, pos, num) {
  // 检查行重复
  let [x,y] = pos
  if (board[x].includes(num)) {
    return false
  }
  // 检查列重复
  for (let i = 0; i < 9; i++) {
    if (board[i][y] === num) {
      return false
    }
  }
  // 检查九格重复
  // 横坐标起点 3 * Math.floor(x/3) 纵坐标起点 3 * Math.floor(y/3)
  for (let i = 3 * Math.floor(x/3); i < 3 * Math.floor(x/3) + 3; i++) {
    for (let j = 3 * Math.floor(y/3); j < 3 * Math.floor(y/3) + 3; j++) {
      if (board[i][j] === num) {
        return false
      }
    }
  }
  return true
}
