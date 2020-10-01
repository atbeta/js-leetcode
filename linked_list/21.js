/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  let p1 = l1
  let p2 = l2
  let result = null
  let p3 = null
  while (p1 || p2) {
    // 都不为空，比较大水上
    if (p1 && p2) {
      if (p1.val < p2.val) {
        if (!result) {
          result = p1
          p3 = p1
          p1 = p1.next
        } else {
          p3.next = p1
          p3 = p3.next
          p1 = p1.next
        }
      } else {
        if (!result) {
          result = p2
          p3 = p2
          p2 = p2.next
        } else {
          p3.next = p2
          p3 = p3.next
          p2 = p2.next
        }
      }
    }
    if (p1 && !p2) {
      if (!result) {
        return p1
      } else {
        p3.next = p1
        return result
      }
    }
    if (p2 && !p1) {
      if (!result) {
        return p2
      } else {
        p3.next = p2
        return result
      }
    }
  }
  return result
}
