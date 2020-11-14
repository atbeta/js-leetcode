/**
 * @param {number[][]} people
 * @return {number[][]}
 */
// 本题题解第一种算法为贪心，但另一种解法更优
var reconstructQueue = function(people) {
  // 基于人只能看到>=自己身高的人，先排高的，再排矮的，后加入的不会对前面的造成影响
  let result = []
  // 用 splice 向数组中插入元素
  // 先排序，身高从低到高
  people.sort((a,b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return b[0] - a[0]
    }
  })
  for (let i = 0;i < people.length; i++) {
    let current = people[i]
    result.splice(current[1], 0, current)
  }
  return result
}
