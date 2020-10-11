/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function(root, limit) {
  if (!root || maxSum(root) < limit) {
    return null
  }
  let left = sufficientSubset(root.left, limit - root.val)
  let right = sufficientSubset(root.right, limit - root.val)
  root.left = left
  root.right =right
  return root
};

// 通过一个节点所有根叶路径中值最大值 = node.val + Math.max(从左孩子开始的最大路径和， 从右孩子开始的最大路径和
function maxSum(node) {
  if (!node) return Number.MIN_SAFE_INTEGER
  if (!node.left && !node.right) return node.val
  return node.val + Math.max(maxSum(node.left), maxSum(node.right))
}
