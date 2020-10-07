/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 合并 k 个有序链表，每个取最小形成一个长度为k的数组，取最小的，之后从最小值所属的链表中加入一个到数组，不断重复
// 取最小的过程使用堆，将复杂度由klgk 降低至 lgk
var mergeKLists = function(lists) {
  // 将 lists 以 node.val 作为值构造堆
  // 取值时，将 node 移出堆，并将 node.next 加入堆
  let result = null
  let current = null
  lists = lists.filter(node => node !== null)
  buildHeap(lists)
  while (lists.length) {
    let currentMinNode = lists[0]
    if (!result) {
      result = currentMinNode
      current = result
    } else {
      current.next = currentMinNode
      current = current.next
    }
    // 如果未到最后，移动到下一节点，否则移除该节点
    if (currentMinNode.next) {
      lists[0] = currentMinNode.next
    } else {
      lists[0] = lists[lists.length-1]
      lists.pop()
    }
    heapify(lists, 0)
  }
  return result
}

function buildHeap(nodes) {
  let mid = (nodes.length - 1) >> 1
  for (let i=mid;i>=0;i--) {
    heapify(nodes, i)
  }
}

function heapify(nodes, n) {
  if (2*n+1 > nodes.length-1) return // 没有子孩子不处理
  if (2*n+2 <= nodes.length-1 && nodes[2*n+2].val < nodes[2*n+1].val) {
    // n 与 2*n+2 交换
    if (nodes[2*n+2].val < nodes[n].val) {
      [nodes[n], nodes[2*n+2]] = [nodes[2*n+2], nodes[n]]
      heapify(nodes, 2*n+2)
    }

  } else {
    // n 与 2*n+1 交换
    if (nodes[2*n+1].val < nodes[n].val) {
      [nodes[n], nodes[2*n+1]] = [nodes[2*n+1], nodes[n]]
      heapify(nodes, 2*n+1)
    }
  }
}
