/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 本题是37题的一部分，只检查是否有效
var isValidSudoku = function(board) {
  // 循环数独，每一个进行检查
  let valid = true
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        valid = valid && check(board, [i,j], board[i][j])
      }
    }
  }
  return valid
};

// 检查是否有效，和37区别在于要把当前位置排除掉
function check(board, pos, num) {
  // 检查行重复
  let [x,y] = pos
  for (let i = 0; i < 9; i++) {
    if (board[x][i] === num && i !== y) {
      return false
    }
  }
  // 检查列重复
  for (let i = 0; i < 9; i++) {
    if (board[i][y] === num && i !== x) {
      return false
    }
  }
  // 检查九格重复
  // 横坐标起点 3 * Math.floor(x/3) 纵坐标起点 3 * Math.floor(y/3)
  for (let i = 3 * Math.floor(x/3); i < 3 * Math.floor(x/3) + 3; i++) {
    for (let j = 3 * Math.floor(y/3); j < 3 * Math.floor(y/3) + 3; j++) {
      if (board[i][j] === num && !(i === x && j === y)) {
        return false
      }
    }
  }
  return true
}
