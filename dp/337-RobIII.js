/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 原始递归解法
var rob = function(root) {
  if (!root) return 0
  if (!root.left && !root.right) {
    return root.val
  }
  // 比较2个子节点偷的钱和根节点加四个孙结点偷的钱，选择最大值
  let money1 = rob(root.left) + rob(root.right)
  let money2 = root.val + rob(root.left && root.left.left) + rob(root.left && root.left.right) + rob(root.right && root.right.left) + rob(root.right && root.right.right)
  return Math.max(money1, money2)
}

// 动态规划思路
// 见了鬼了，这个竟然总是超时，待解决
var robImprove = function(root) {
  return Math.max(...robHelper(root))
}

function robHelper(root) {
  // 返回一个数组，分别表示不偷根结点的值和偷根节点的值
  if (!root) return [0, 0]
  let result = []
  result[0] = Math.max(...robHelper(root.left)) + Math.max(...robHelper(root.right))
  result[1] = root.val + robHelper(root.left)[0] + robHelper(root.right)[0]
  return result
}
