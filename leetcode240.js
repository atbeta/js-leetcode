/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false
  // 从右上角搜索
  let m = matrix.length
  let n = matrix[0].length
  let mPos = 0
  let nPos = n - 1
  while (mPos < m && nPos >= 0) {
    if (matrix[mPos][nPos] === target) {
      return true
    }
    if (matrix[mPos][nPos] > target) {
      nPos --
    } else {
      mPos ++
    }
  }
  return false
};
