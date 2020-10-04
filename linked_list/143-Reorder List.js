/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 暴力算法，存储所有节点并重新拼接，可通过，效率低:24.94% 19.21%
var reorderList = function(head) {
  let nodes = []
  while (head) {
    let current = head
    head = head.next
    current.next = null
    nodes.push(current)

  }
  // 拼接新的链表
  let last = null
  while (nodes.length) {
    // 前面出一个，后面出一个，拼接
    let front = nodes.shift()
    let end = nodes.pop()
    if (end) {front.next = end}
    if (last) {
      last.next = front
    }
    last = end
  }
};

// 双指针：将中间后面的所有节点反转，然后指针分别指向 head 和 中间之后第一个节点，向前移动并将后指针指向的节点移动到前指针
const reorderList2 = function (head) {
  // 快慢指针找到中间位置
  let fast = head
  let slow = head
  let slowPre = null
  while (fast && fast.next) {
    fast = fast.next.next
    slowPre = slow
    slow = slow.next
  }
  // 如果有奇数个节点，slow位于中间节点，需要向下移动一位到达开始需要反转的节点
  if (fast) {
    slowPre = slow
    slow = slow.next
  }
  // 开始从 slow 开始反转，保留slow位置用于后面使用
  // todo 待完善
}
