/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const findSecondMinimumValue = function(root) {
  // 递归解决
  // root root.left root.right
  if (!root) return -1
  if (!root.left || !root.right) return -1
  // 比较 root root.left root.right
  if (root.left.val === root.right.val) {
    let leftSecondMin = findSecondMinimumValue(root.left)
    let rightSecondMin = findSecondMinimumValue(root.right)
    // 返回不是负1的较小的那一个
    return Math.min(...[leftSecondMin, rightSecondMin].filter(v => v !== -1))
  }
  // 有两种可能，一种是较大子节点的值，另一种是递归较小子节点的倒数第二小的值
  // 什么时候能确定这个值？当值较小节点是子节点的时候
  if (root.left.val < root.right.val) {
    if (!root.left.left && !root.left.right) return root.right.val
    let leftSecondMin = findSecondMinimumValue(root.left)
    // 返回
    return Math.min(...[leftSecondMin, root.right.val].filter(v => v !== -1))
  }
  if (root.left.val > root.right.val) {
    if (!root.left.left && !root.left.right) return root.left.val
    let rightSecondMin = findSecondMinimumValue(root.right)
    // 返回
    return Math.min(...[rightSecondMin, root.left.val].filter(v => v !== -1))
  }
}
