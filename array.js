// 打印矩阵
function printMatrix(matrix, n) {
  // 通过左上角坐标和右下角坐标可以确定一个矩阵
  // 0,0 3,3
  // 打印时，x++ => y++ => x-- => y--
  //0,0 3,3 => 1,1 2,2 => 2,2 1,1
  for (let start = 0, end = n; start <= end; start++, end--) {
    printMatrixPartial(matrix, start, end)
  }
}

const matrix = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]

function printMatrixPartial(matrix, start, end) {
  // 怎么判断是要加还是减呢？
  // 如果x=start,那么y++
  // 如果y=end，那么x++
  // 如果x=end，那么y--
  // 如果y=start，那么x--
  // 加入一个变量表示是否已经在打印
  if (start > end) return
  if (start === end) {
    console.log(matrix[start][end])
    return
  }
  let flag = false // 是否已经输入过，避免无法结束转圈
  let x = start
  let y = start
  // 跳出循环条件, x=start y=start 且 flag=true
  while (!(x === start && y === start && flag)) {
    console.log(matrix[x][y])
    flag = true
    if (x === start && y < end) {
      y++
      continue
    }
    if (y === end && x < end) {
      x++
      continue
    }
    if (x === end && y > start) {
      y--
      continue
    }
    if (y === start && x > start) {
      x--
    }
  }
}

// printMatrixPartial(matrix, 1, 2)
// printMatrix(matrix, 3)

// 旋转正方形矩阵，与转圈打印类似，我们一圈一圈的旋转
function rotateMatrix() {

}

/**
 * 1  2  3  4
 * 5  6  7  8
 * 9  10 11 12
 * 13 14 15 16
 */
function rotateMatrixPartial(matrix, tx, ty, bx, by) {
  // 对每一个圈来说分成
}

// 需要排序的最短数组 leetcode 581
/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路：leftIndex 满足右边的值都比他大 rightIndex 满足左边的值都比他小
const findUnsortedSubarray = function(nums) {
  let leftIndex = 0
  let rightIndex = nums.length - 1
  while (leftIndex <= rightIndex && nums[leftIndex] <= Math.min(...nums.slice(leftIndex+1))) {
    leftIndex ++
  }
  if (leftIndex === rightIndex) {
    return 0
  }
  while (rightIndex > leftIndex && nums[rightIndex] >= Math.max(...nums.slice(0, rightIndex))) {
    rightIndex --
  }
  return rightIndex - leftIndex + 1
}

const nums = [1,5,3,4,2,6,7]
// console.log(findUnsortedSubarray(nums))

const arr2 = [1,2,1,2,1,2,1,2,1,2,3]

// 找到占多数的元素，超过一半,超过 1／3 则每次3个，超过K/N则每次
// K = N/2，k = 2，N/K，如果大于1/2，全部可以按1/2的处理方式
function findMajority(nums) {
  let candidate
  let times = 0
  for (let i = 0; i < nums.length; i++) {
    if (times === 0) {
      candidate = nums[i]
    } else if (candidate === nums[i]) {
      times++
    } else {
      times--
    }
  }
  times = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidate) {
      times++
    }
  }
  if (times/nums.length > 1/2) {
    return candidate
  }
  return null
}

// 增强版 leetcode 229,找到所有出现次数大于 n/3 的数字
// 要求 O(n) 时间和 O(1) 空间，所以必须使用上面的方法
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 思路是每次删除三个不一样的元素，不断重复，到最后剩下的里面再判断
const majorityElement = function(nums) {
  let candidates = [] // 候选数字
  let times = new Map()
  let pointer = 0
  // 补充 candidates
  while (pointer < nums.length) {
    // 补充 candidates
    while (candidates.length < 3 && pointer < nums.length) {
      if (!times[nums[pointer]]) {
        candidates.push(nums[pointer])
        times[nums[pointer]] = 1
      } else {
        times[nums[pointer]] ++
      }
      pointer ++
    }
    // 如果补充完后已经到最后了，直接跳出循环
    if (pointer === nums.length) break
    // 否则开始进行三个一组清除
    for (let i = 0; i < 3; i++) {
      times[candidates[i]] --
      if (times[candidates[i]] ===0) {
        candidates.splice(i, 1)
        i--
      }
    }
  }
  candidates.forEach(v => times[v] = 0)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidates[0]) {
      times[candidates[0]] ++
    }
    if (candidates.length > 1 && nums[i] === candidates[1]) {
      times[candidates[1]]++
    }
  }
  return candidates.filter(v => 3 * times[v] > nums.length)
}

// console.log(majorityElement([1,1,1,2,3,4,5,6]))

// 最大子数组和 leetcode 53
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  // 暴力方法是双层循环，分别是开头和结尾
  // 通过记录累加值优化
  // 这是另一种更加优秀的算法
  let max = Number.MIN_VALUE
  let p = 0 // 数组下标
  let sum = 0 // 当前累加和
  // 如果累加和大于 max，就更新 max
  // 从数组开始开始移动，如果累加和变成负值，那么就重置累加和
  while (p < nums.length) {
    sum += nums[p]
    if (sum > max) {
      max = sum
    }
    if (sum < 0) {
      sum = 0
    }
    p++
  }
  return max
}


