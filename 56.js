/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 一种非常原始的方法，排序 => 逐个检查合并，合并时记录删除
const merge = function(intervals) {
  const intervalsSorted = intervals.sort((a,b) => a[0] - b[0])
// 结尾和开头重叠就可以合并
  let toRemoveIndex = []
  for (let i=1;i<intervals.length;i++) {
    // 从 Map 中找到值比自己起点大的值，调整值，并给自己增加待删除标记
    for (let j=0;j<i;j++) {
      if (!toRemoveIndex.includes(j) && intervalsSorted[j][1]>=intervalsSorted[i][0] && intervals[j][0] <=intervals[i][1]) {
        intervalsSorted[j][0] = Math.min(intervalsSorted[j][0], intervalsSorted[i][0])
        intervalsSorted[j][1] = Math.max(intervalsSorted[j][1], intervalsSorted[i][1])
        toRemoveIndex.push(i)
        break
      }
    }
  }
  return intervalsSorted.filter((_,index) => !toRemoveIndex.includes(index))
}

