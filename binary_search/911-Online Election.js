/**
 * @param {number[]} persons
 * @param {number[]} times
 */
var TopVotedCandidate = function(persons, times) {
  this.countMap = new Map() // 统计票数
  this.voteMap = new Map() // 记录票数领先者
  this.persons = persons
  this.times = times
  let countMap = this.countMap
  let voteMap = this.voteMap
  let max = 0
  for (let i = 0;i < persons.length; i++) {
    // 统计第 i 张票时领先的
    if (!countMap.has(persons[i])) {
      countMap.set(persons[i], 1)
    } else {
      countMap.set(persons[i], countMap.get(persons[i]) + 1)
    }
    // 检查是否最大，更新 voteMap
    if (countMap.get(persons[i]) >= max) {
      max = countMap.get(persons[i])
      voteMap.set(i, persons[i])
    } else {
      voteMap.set(i, voteMap.get(i-1))
    }
  }
};

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function(t) {
  if (t >= this.times[this.times.length - 1]) {
    return this.voteMap.get(this.times.length - 1)
  }
  // 二分查找找到 t 的位置
  let left = 0
  let right = this.times.length - 1
  let result = 0
  while (left < right - 1) {
    let mid = (left + right) >> 1
    if (this.times[mid] === t) {
      left = mid
      break
    }
    if (this.times[mid] > t) {
      right = mid
    } else {
      left = mid
    }
  }
  return this.voteMap.get(left)
};

/**
 * Your TopVotedCandidate object will be instantiated and called as such:
 * var obj = new TopVotedCandidate(persons, times)
 * var param_1 = obj.q(t)
 */
