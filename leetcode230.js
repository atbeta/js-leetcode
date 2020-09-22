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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  inorderTraversal(root, [], k)
};

function inorderTraversal(root, result, k) {
  // 递归中序遍历，记录结果
  if (!root) return
  if (!root.left && !root.right) {
    result.push(root.val)
  }
  inorderTraversal(root.left, result, k)
  inorderTraversal(root.right, result, k)
  if (result.length >= k) {
    return result[k-1]
  }
}
