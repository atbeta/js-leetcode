/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 旧解法，暂保留
const threeSum = function(nums) {
  let result = []
  // 将数字按零、正、负分类
  let negativeNums = nums.filter(num => num < 0).sort((a,b) => a - b)
  let positiveNums = nums.filter(num => num > 0).sort((a,b) => a - b)
  let zeroNums = nums.filter(num => num === 0)
  // 可能有3个0 1零1正1负 1正2负 2正1负 4种情况
  if (zeroNums.length >= 3) {
    result.push([0,0,0])
  }
  let negativeNumsFiltered = Array.from(new Set(negativeNums))
  let positiveNumsFiltered = Array.from(new Set(positiveNums))
  if (zeroNums.length >= 1) {
    // 找符合条件的1正1负
    // 去重其中一个数组，并循环，从另一个数组找相反数
    negativeNumsFiltered.forEach(num => {
      if (positiveNums.includes(-num)) {
        result.push([0, num, -num])
      }
    })
  }
  // 找符合条件的1正2负: 正数组去重，变成一个求数组两数之和问题
  positiveNumsFiltered.forEach(num => {
    let twoSumResult = twoSum(negativeNums, -num)
    if (twoSumResult.length) {
      result.push(...twoSumResult.map(item => [...item, num]))
    }
  })
  // 找符合条件的2正1负：负数组去重，变成一个求数组两数之和问题
  negativeNumsFiltered.forEach(num => {
    let twoSumResult = twoSum(positiveNums, -num)
    if (twoSumResult.length) {
      result.push(...twoSumResult.map(item => [...item, num]))
    }
  })
  return result
}

function twoSum(nums, sum) {
  if (nums.length < 2) return []
  // 构造map的同时加入result
  let numMap = new Map()
  let result = []
  // 单独处理 sum = 2倍某值，且该值又在数组中出现超过4次的情况
  // 处理方式是增加一个Map，对出现超过2次的数字不再处理
  let numCountMap = new Map()
  nums.forEach(num => {
    if (!numCountMap.get(num)) {
      numCountMap.set(num, 1)
    } else {
      numCountMap.set(num, numCountMap.get(num) + 1)
    }
    // 检查 key sum-num 是否存在，存在的话加入 result，并删除二个key
    if (numCountMap.get(num) <= 2 && numMap.has(sum - num)) {
      result.push([num, sum - num])
      numMap.delete(sum-num)
    } else {
      numMap.set(num, sum - num)
    }
  })
  // result 可能会有重复，比如nums中有多个重复数字 2 2 2 2 目标为4，就会重复
  return result
}

const nums = [0,2,2,3,0,1,2,3,-1,-4,2]

console.log(threeSum(nums))
