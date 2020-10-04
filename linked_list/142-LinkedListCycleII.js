/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 完全参考141题目的解法
var detectCycle = function(head) {
  if (!head || !head.next) return null
  let fast = head
  let slow = head
  // fast 每次走2步，slow每次走一步，如果有环，二者会再次相遇
  // 如果超出题目给的节点数上限仍未相遇，则认为无环
  let count = 0
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    count++
    if (count > Math.pow(10,4)) {
      return null
    }
    if (fast === slow) break
  }
  if (!fast || !fast.next) {
    return null
  }
  // 证明有环，要找到环的起点
  // 再次使用2个指针，分别是原慢指针与新的从head起的指针，每次均向前一步，他们第一次一定相遇在环的起点
  let newSlow = head
  while (slow !== newSlow) {
    slow = slow.next
    newSlow = newSlow.next
  }
  return slow
};
