/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
  // 最近公共祖先
  // 打印一条从根节点到目标节点的路径，路径中第一个相同的值即是答案
  // 怎么打印这条结点？遍历，到达目标结点即停止寻找
const lowestCommonAncestor = function(root, p, q) {
  let pPath = findPath(root, p.val, [])
  let qPath = findPath(root, q.val, [])
  let len = pPath.length
    for (let i = len - 1; i >= 0; i--) {
      if (qPath.map(path => path[0]).includes(pPath[i][0])) {
        return pPath[i]
      }
    }
}

// 辅助方法，从二叉树某节点开始找到一条包含num的路径
function findPath(node, num, path = []) {
  if (!node) return null
  if (node.val === num) {
    return [...path, node]
  }
  return findPath(node.left, num, [...path, node]) || findPath(node.right, num, [...path, node])
}


