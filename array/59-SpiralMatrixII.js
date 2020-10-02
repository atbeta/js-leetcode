/**
 * @param {number} n
 * @return {number[][]}
 */
// 关键是找到填充
var generateMatrix = function(n) {
  // 初始值
  let result = []
  for (let i=0;i<n;i++) {
    for (let j=0;j<n;j++) {
      if (!result[i]) {
        result[i] = []
      }
      result[i][j] = 0
    }
  }
  // 填充，一圈一圈填充，一个左上和右下位置可以确定一个圈
  let topLeft = [0,0]
  let bottomRight = [n-1,n-1]
  let current = 1 // 当前填充数字
  while (current <= n*n) {
    let i = topLeft[0]
    let j = topLeft[1]
    // 处理特殊情况，只有中间一个数字
    if (i === bottomRight[0] && j === bottomRight[1]) {
      result[i][j] = n*n
      current ++
    }
    // 向右填充
    while (j < bottomRight[1]) {
      result[i][j] = current
      j++
      current++
    }
    // 向下填充
    while (i < bottomRight[0]) {
      result[i][j] = current
      i++
      current++
    }
    // 向左填充
    while (j > topLeft[1]) {
      result[i][j] = current
      j--
      current++
    }
    // 向上填充
    while (i > topLeft[0]) {
      result[i][j] = current
      i--
      current++
    }
    // 缩小范围
    topLeft[0]++
    topLeft[1]++
    bottomRight[0]--
    bottomRight[1]--
  }
  return result
}

