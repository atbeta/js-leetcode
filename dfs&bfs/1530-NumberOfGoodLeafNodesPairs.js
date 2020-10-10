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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
  if (!root) return 0
  // 以每一个顶点为公共父节点向左右搜索，找到其左边所有叶子结点及距离，右边所有叶子结点及距离，输出相加不大于distance的组合
  // 递归处理左子树、右子树
  let leftLeaf = dfs(root.left, 1)
  let rightLeaf = dfs(root.right, 1)
  let count = 0
  for (let i = 0; i < leftLeaf.length; i++) {
    for (let j = 0; j < rightLeaf.length; j++) {
      if (leftLeaf[i].distance + rightLeaf[j].distance <= distance) {
        count ++
      }
    }
  }
  count += countPairs(root.left, distance) + countPairs(root.right, distance)
  return count
};

function dfs(node, distance) {
  let result = []
  // 找到所有叶子结点以及距离
  if (!node) return result
  if (!node.left && !node.right) {
    result.push({
      val: node.val,
      distance
    })
  }
  result.push(...dfs(node.left, distance + 1))
  result.push(...dfs(node.right, distance + 1))
  return result
}
