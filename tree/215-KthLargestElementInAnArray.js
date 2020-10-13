// 数组中的第k大的值
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
  // 最简单方法，排序去重找第 k-1 个值即可，时间复杂度为 O(nlgn)
  // 高级方法是维护一个大小为k的小根堆，时间复杂度为 O(nlgk)
const findKthLargest = function(nums, k) {
    const heap = []
    // 如果 heap 长度小于k,直接加入堆，调整堆
    // 如果 heap 的长度=k，比较当前值与堆顶值，如果比堆顶值大，那么将堆顶值替换为当前值，调整堆
    let current = 0
    while (heap.length < k && current < nums.length) {
      heap.push(nums[current])
      adjustMinHeapFromBottom(heap)
      current++
    }
    // createMinHeap(heap)
    console.log(heap)
    for (let i = current; i < nums.length; i++) {
      if (nums[i] > heap[0]) {
        heap[0] = nums[i]
        adjustMinHeapFromTop(heap)
      }
    }
    return heap[0]
  }

// 创建最大堆, 时间复杂度 O(n) 循环一次
function buildMinHeap(nums) {
  // 从第 nums.length /2, 即最后一个非叶子结点开始向前heapify
}
// 对第i个节点进行调整
function heapify(nums, i) {

}

// 调整最大堆, 时间复杂度 O(lgn)
// 可以从上向下调整，也可以从上向下调整，看插入的位置
// 从上向下
function adjustMinHeapFromTop(nums) {
  // 堆顶元素被替换，需要进行调整
  const len = nums.length
  let p = 0
  while (2*p + 1 < len) {
    // 找到左右孩子中的大的，交换，如果未发生交换，直接退出
    // 如果右孩子存在并且小于左孩子
    if (2*p+2 < len && nums[2*p+2] < nums[2*p+1]) {
      if (nums[2*p+2] < nums[p]) {
        // 交换，移动p
        [nums[2*p+2], nums[p]] = [nums[p], nums[2*p+2]]
        p = 2*p + 2
      } else {
        return
      }
    } else {
      if (nums[2*p+1] < nums[p]) {
        // 交换，移动p
        [nums[2*p+1], nums[p]] = [nums[p], nums[2*p+1]]
        p = 2*p + 1
      } else {
        return
      }
    }
  }
}

// 从下向上
// 堆底增加了一个新元素，需要调整堆
function adjustMinHeapFromBottom(nums) {
  let p = nums.length - 1
  while ((p - 1) >> 1 >= 0 && nums[(p-1) >> 1] > nums[p]) {
    [nums[p], nums[(p-1) >> 1]] = [nums[(p-1) >> 1], nums[p]]
    p = (p - 1) >> 1
  }
}

const arr = [5,2,4,1,3,6,0]
const k = 4

console.log(findKthLargest(arr, k))

