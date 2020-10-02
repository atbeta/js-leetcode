/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 本题可以延用116的解法
var connect = function(root) {
    // 处理特殊情况
    if (!root) return root
    let queue = []
    queue.push(root)
    let currentLevelCount = 1
    let nextLevelCount = 0
    let current = null // 当前处理的节点
    let last = null // 上次处理的节点，用于增加 next
    while (queue.length) {
      // 更新节点
      current = queue.shift()
      currentLevelCount--
      // 连接 next 节点
      if (last) {
        last.next = current
      }
      if (current.left) {
        queue.push(current.left)
        nextLevelCount++
      }
      if (current.right) {
        queue.push(current.right)
        nextLevelCount++
      }

      if (currentLevelCount === 0) {
        currentLevelCount = nextLevelCount
        nextLevelCount = 0
        // current 是当前层最后一个节点，不更新last
        // 否则保存当前节点至 last 用于连接
        last = null
      } else {
        last = current
      }
    }
    return root
  };

