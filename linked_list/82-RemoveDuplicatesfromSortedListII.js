// 双指针
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
  let newHead = head
  let lastNode = null
  let pointer = head
  while (pointer && pointer.next) {
    if (pointer.val === pointer.next.val
      && (pointer.next.next && pointer.next.next.val === pointer.val)) {
      pointer = pointer.next
    }
    else if (pointer.val === pointer.next.val) {
      if (!lastNode) {
        newHead = pointer.next.next
      } else {
        lastNode.next = pointer.next.next
      }
      pointer = pointer.next.next
    } else {
      lastNode = pointer
      pointer = pointer.next
    }
  }
  return newHead
}

