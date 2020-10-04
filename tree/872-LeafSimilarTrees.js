/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
// 中序遍历记录叶子节点
var leafSimilar = function(root1, root2) {
  let result1 = []
  let result2 = []
  inorderTraversal(root1, result1)
  inorderTraversal(root2, result2)
  if (result1.length !== result2.length) return false
  for (let i=0;i<result1.length;i++) {
    if (result1[i]!==result2[i]) {
      return false
    }
  }
  return true
};

// 中序遍历并记录叶子节点
function inorderTraversal(root, result) {
  if (!root) return
  if (!root.left && !root.right) {
    result.push(root.val)
  }
  inorderTraversal(root.left, result)
  inorderTraversal(root.right, result)
}
