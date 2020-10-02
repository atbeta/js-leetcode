/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  // 处理空数组情况
  if (matrix.length === 0) {
    return []
  }
  let result = []
  let m = matrix.length
  let n = matrix[0].length
  // 处理 m 为 1 或者 n为 1 情况
  if (m === 1) return matrix[0]
  if (n === 1) return matrix.map(item => item[0])
  let topLeft = [0,0]
  let bottomRight = [m-1, n-1]
  while (result.length < m*n) {
    // 处理特殊情况，最后剩余一个
    if (topLeft[0]===bottomRight[0] && topLeft[1]===bottomRight[1]) {
      result.push(matrix[topLeft[0]][topLeft[1]])
    }
    // 打印这一个方块区域
    let i = topLeft[0]
    let j = topLeft[1]
    // 向右
    while (j<bottomRight[1]) {
      result.push(matrix[i][j])
      j++
    }
    // 向下
    while (i<bottomRight[0]) {
      result.push(matrix[i][j])
      i++
    }
    // 向左
    while (j>topLeft[1]) {
      result.push(matrix[i][j])
      j--
    }
    // 向上
    while (i>topLeft[0]) {
      result.push(matrix[i][j])
      i--
    }
    // 缩小区域
    topLeft[0]++
    topLeft[1]++
    bottomRight[0]--
    bottomRight[1]--
  }
  // 待处理
  return result.slice(0,m*n)
}
