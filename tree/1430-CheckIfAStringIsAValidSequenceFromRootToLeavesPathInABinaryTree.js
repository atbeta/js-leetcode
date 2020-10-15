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
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function(root, arr) {
  // 从根向下搜索
  return solve(arr, 0, root)
};


function solve(arr, k, node) {
  if (!node) return false
  if (arr[k] !== node.val) return false
  if (arr.length - 1=== k && (node && !node.left && !node.right)) {
    return true
  }
  // 继续向下搜索
  return solve(arr, k + 1, node.left) || solve(arr, k + 1, node.right)
}
