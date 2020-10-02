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
// 5.10/13.05 待优化
var maxPathSum = function(root) {
  if (!root) return Number.MIN_SAFE_INTEGER
  if (!root.left && !root.right) {
    return root.val
  }
  // 选择最大的值：不向左也不向右，向左或向右，既向左也向右，递归左右子节点
  let maxLeft = maxPathHelper(root.left)
  let maxRight = maxPathHelper(root.right)
  let maxRoot = maxLeft > 0 ?
    (maxRight > 0 ? root.val + maxRight + maxLeft: root.val + maxLeft) :
    (maxRight > 0 ? root.val + maxRight : root.val)
  return Math.max(maxRoot, maxPathSum(root.left), maxPathSum(root.right))
}

// 计算以某节点为起点，向左或者向右的路径和最大值
function maxPathHelper(node) {
  if (!node) return Number.MIN_SAFE_INTEGER
  if (!node.left && !node.right) {
    return node.val
  }
  let maxSide = Math.max(maxPathHelper(node.left), maxPathHelper(node.right))
  return  maxSide > 0 ? node.val + maxSide : node.val
}
