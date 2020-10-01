/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  // 每次都找一个能合并的进行合并，合并了就回退到起点重新寻找
  let merged = newInterval
  let p = 0
  while (p < intervals.length) {
    let mergeResult = merge(intervals[p], merged)
    if (mergeResult) {
      merged = mergeResult
      intervals.splice(p,1)
      p = 0
    } else {
      p ++
    }
  }
  intervals.push(merged)
  return intervals.sort((a,b) => a[0]- b[0])
}

function merge(interval1, interval2) {
  if (interval1[1] >= interval2[0] && interval1[0] <= interval2[1]) {
    return [Math.min(interval1[0], interval2[0]), Math.max(interval1[1], interval2[1])]
  } else {
    return false
  }
}
