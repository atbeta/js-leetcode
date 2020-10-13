function binarySearch(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((left+right)/2)
    if (nums[mid] === target) {
      return mid
    }
    if (target > nums[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}

const nums = [1,2,3,4,5,6,7,8,9]
console.log(binarySearch(nums, 9))

function isPalindrome(str) {
  // 判断回文数，尽可能简洁
  return str.split('').reverse().join('') === str
}

// leetcode 680 加强版判断回文数,可以删除其中一个字符
// 最简单的循环一次，挨个判定
/**
 * @param {string} s
 * @return {boolean}
 */
// 从两侧向中间找，找到第一个不相等的地方，删除其中一个，再判定是否是回文的，如果都不是，返回false
const validPalindrome = function(s) {
  let left = 0
  let right = s.length - 1
  while (left <= right) {
    if (s[left] === s[right]) {
      left ++
      right --
    } else {
      // 如果对应的位置不相等，需要判定两个字符串是否是回文的
      // 分别是去掉 right 位置字符和去掉 left 位置字符
      break
    }
  }
  // 循环结束则为回文字串
  if (left > right) {
    return true
  }

  // 否则需要判定 s.slice[left:right]去掉首或者尾是否回文
  const s1 = s.slice(left, right)
  const s2 = s.slice(left+1, right+1)
  const isPalindrome = s => s.split('').reverse().join('') === s
  return isPalindrome(s1) || isPalindrome(s2)

  // 可以优化，继续 left right
}

// 最高效率的数组去重
function deleteRepeat(arr) {
  // return Array.from(new Set(arr))
  const arrMap = new Map()
  arr.forEach(item => arrMap[item] = true)
  return arrMap.keys()
}

const arr = [1,2,3,3,2,1,1,10]
console.log(deleteRepeat(arr))
