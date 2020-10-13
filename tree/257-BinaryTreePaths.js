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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  const result = printPaths(root, [])
  return result.map(item => item.join('->'))
}

function printPaths(node, path) {
  if (!node) return []
  let result = []
  if (!node.left && !node.right) {
    result.push([...path, node.val])
  }
  result.push(...printPaths(node.left, [...path, node.val]))
  result.push(...printPaths(node.right, [...path, node.val]))
  return result
}
