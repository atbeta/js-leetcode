/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  // 构造两两和数组, 使用 Map 存储
  let twoSumsMap = new Map()
  // 以相反结构存储，key为和，value 为首尾数组
  for (let i = 0; i < nums.length; i ++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (!twoSumsMap.has(nums[i] + nums[j])) {
        twoSumsMap.set(nums[i] + nums[j], [])
      }
      twoSumsMap.get(nums[i] + nums[j]).push([i, j])
    }
  }
  // 构造好两数和，需要找出一对值相加正好 = target 的组合
  let twoSumsArr = Array.from(twoSumsMap.keys())
  // 问题被转化成了 twoSum，可以在O(n)时间解决
  // 将每一对组合对应的数组相乘，要求是没有重复序号
  let matchArr = twoSum(twoSumsArr, target)
  let result = []
  let repeatMap = new Map()
  for (let i = 0; i < matchArr.length; i++) {
    let v1 = twoSumsMap.get(matchArr[i][0])
    let v2 = twoSumsMap.get(matchArr[i][1])
    v1.forEach(item1 => {
      v2.forEach(item2 => {
        if (item1[0] !== item2[0] && item1[0] !== item2[1] && item1[1] !== item2[0] && item1[1] !== item2[1]) {
          let current = [nums[item1[0]], nums[item1[1]], nums[item2[0]], nums[item2[1]]].sort((a,b) => a - b)
          if (!repeatMap.get(current.toString())) {
            result.push(current)
            repeatMap.set(current.toString(), true)
          }
        }
      })
    })
  }
  return result
};

// 返回值而非序号
// 这里存在一个问题，即当 target 是某个和的两倍时，也要拿出来，否则会遗漏解
function twoSum(nums, target) {
  let result = []
  let map = new Map()
  for (let i = 0;i < nums.length; i++) {
    // 如果 nums[i] === target/2，直接将[nums[i], nums[i]] 加入结果,这样也不用再单独处理4个0的情况
    if (nums[i] === target /2) {
      result.push([nums[i], nums[i]])
    }
    if (map.has(nums[i])) {
      result.push([nums[map.get(nums[i])], nums[i]])
    } else {
      map.set(target - nums[i], i)
    }
  }
  return result
}
