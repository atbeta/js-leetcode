/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 题目提出是否能使用 O(1)空间解决
// 暴力方式为使用 Map 记录，O(1)方案为双指针
var hasCycle = function(head) {
  if (!head || !head.next) return false
  let fast = head
  let slow = head
  // fast 每次走2步，slow每次走一步，如果有环，二者会再次相遇
  // 如果超出题目给的节点数上限仍未相遇，则返回 false
  let count = 0
  while (count < Math.pow(10,4) && fast && slow) {
    fast = fast.next
    count++
    if (!slow.next) {
      return false
    }
    slow = slow.next.next
    if (fast === slow) return true
  }
  return false
}
