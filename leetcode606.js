/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
// 将每一个子树都用括号包起来
const tree2str = function(t) {
  if (!t) return ''
  let leftStr = nodeToStr(t.left)
  let rightStr = nodeToStr(t.right)
  return `${t.val}${leftStr}${rightStr}`
}

function nodeToStr(node) {
  if (!node) return ''
  if (!node.left && !node.right) {
    return `(${node.val})`
  }
  const leftStr = nodeToStr(node.left)
  const rightStr = nodeToStr(node.right)
  return `(${node.val}${leftStr}${rightStr})`
}
