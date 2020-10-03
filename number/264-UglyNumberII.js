/**
 * @param {number} n
 * @return {number}
 */
  // 暴力方法会超时，参考了其他答案，使用堆的方法解决
  // todo 超时待处理
var nthUglyNumber = function(n) {
  // 构建小顶堆
  // 每一步弹出堆顶元素num,并将 num*2 num*3 num*5加入堆，注意去重
  // 为了解决重复问题，使用Map
  let uglyMap = new Map()
  let count = 0
  let heap = [1] //小顶堆
  // 从堆中推出堆顶元素，*2 *3 *5
  while (count < n) {
    let top = heap[0]
    if (!uglyMap.get(top)) {
      uglyMap.set(top, true)
      count++
    }
    let top2times = 2*top
    let top3times = 3*top
    let top5times = 5*top
    // 加入堆
    heap.shift()
    heap.push(top2times)
    heap.push(top3times)
    heap.push(top5times)
    buildHeap(heap)
  }
}

function buildHeap(nums) {
  let mid = (nums.length - 1) >> 1
  for (let i=mid;i>=0;i--) {
    heapify(nums, i)
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
