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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  flattenHelper(root)
};

function flattenHelper(node){
  if (!node) return
  if (!node.left && !node.right) return
  if (!node.left && node.right) {
    flattenHelper(node.right)
    return
  }
  flattenHelper(node.right)
  flattenHelper(node.left)
  // 找到node.left最后一个右孩子
  let lastLeftRightNode = node.left
  while (lastLeftRightNode.right) {
    lastLeftRightNode = lastLeftRightNode.right
  }
  lastLeftRightNode.right = node.right
  node.right = node.left
  node.left = null
}
