/**
 * @param {number} n
 * @return {number}
 */
  // 暴力方法会超时，参考了其他答案，使用堆的方法解决
var nthUglyNumber = function(n) {
  // 构建小顶堆
  // 每一步弹出堆顶元素num,并将 num*2 num*3 num*5加入堆，注意去重
  // 为了解决重复问题，使用Map
  let uglyMap = new Map()
  let count = 0
  let heap = [1] //小顶堆
  // 取堆顶元素，判断是否已经包括在结果中，如果未包含，加入结果
  // 将堆顶元素 *2 *3 *5，并加入堆
  while (count < n) {
    let top = heap[0]
    heap[0] = heap[heap.length-1]
    heap.pop()
    heapify(heap, 0)
    if (!uglyMap.get(top)) {
      // 增加丑数计时，标记已加入
      count++
      uglyMap.set(top, true)
      // 将该值的2倍3倍5倍加入堆
      heap.push(top*2)
      minHeapFix(heap, heap.length-1)
      heap.push(top*3)
      minHeapFix(heap,heap.length-1)
      heap.push(top*5)
      minHeapFix(heap, heap.length-1)
    }
  }
  let result = Array.from(uglyMap.keys())
  return result[result.length - 1]
}

// 自下向上调整最小值
function minHeapFix(nums, n) {
  while (n > 0) {
    let parent = (n-1) >> 1
    if (nums[parent] > nums[n]) {
      [nums[parent], nums[n]] = [nums[n], nums[parent]]
    }
    n = (n-1) >> 1
  }
}

function heapify(nums, n) {
  if (2*n+1 > nums.length-1) return // 没有子孩子不处理
  if (2*n+2 <= nums.length-1 && nums[2*n+2] < nums[2*n+1]) {
    // n 与 2*n+2 交换
    if (nums[2*n+2] < nums[n]) {
      [nums[n], nums[2*n+2]] = [nums[2*n+2], nums[n]]
      heapify(nums, 2*n+2)
    }

  } else {
    // n 与 2*n+1 交换
    if (nums[2*n+1] < nums[n]) {
      [nums[n], nums[2*n+1]] = [nums[2*n+1], nums[n]]
      heapify(nums, 2*n+1)
    }
  }
}
