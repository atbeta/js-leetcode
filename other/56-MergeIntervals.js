/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  // 排序，逐个合并
  let sortIntervals = intervals.sort((a,b) => a[0] - b[0])
  for (let i = 0;i < sortIntervals.length - 1; i++) {
    let current = sortIntervals[i]
    let next = sortIntervals[i+1]
    if (mergeTwo(current, next)) {
      sortIntervals.splice(i, 1)
      i--
      sortIntervals[i+1] = mergeTwo(current, next)
    }
  }
  return sortIntervals
};

function mergeTwo(i1, i2) { // i1[0] <= i2[0]
  if (i1[1] >= i2[0]) {
    let max = Math.max(i1[1], i2[1])
    return [i1[0], max]
  }
  return false
}
