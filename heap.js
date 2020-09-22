// 创建最大堆, 时间复杂度 O(n) 循环一次
function createMaxHeap(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    const parentIndex = (i-1) >> 1
    if (nums[i] > nums[parentIndex]) {
      [nums[i], nums[parentIndex]] = [nums[parentIndex], nums[i]]
    }
  }
}

// 调整最大堆, 时间复杂度 O(lgn)
// 可以从上向下调整，也可以从上向下调整，看插入的位置
// 从上向下
function adjustMaxHeapFromTop(nums) {
  // 堆顶元素被替换，需要进行调整
  const len = nums.length
  let p = 0
  while (2*p + 1 < len) {
    // 找到左右孩子中的大的，交换，如果未发生交换，直接退出
    // 如果右孩子存在并且大于左孩子
    if (2*p+2 < len && nums[2*p+2] > nums[2*p+1]) {
      if (nums[2*p+2] > nums[p]) {
        // 交换，移动p
        [nums[2*p+2], nums[p]] = [nums[p], nums[2*p+2]]
        p = 2*p + 2
      } else {
        return
      }
    } else {
      if (nums[2*p+1] > nums[p]) {
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
function adjustMaxHeapFromBottom(nums) {
  let p = nums.length - 1
  while ((p - 1) >> 1 > 0 && nums[(p-1) >> 1] < nums[p]) {// 未越界且值比父节点大，交换
    [nums[p], nums[(p-1) >> 1]] = [nums[(p-1) >> 1], nums[p]]
    p = (p - 1) >> 1
  }
}
