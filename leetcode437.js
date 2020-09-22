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
 * @param {number} sum
 */
const pathSum = function(root, sum) {
  return pathSumHelper(root, sum, [])
};

function pathSumHelper(node, sum, path) {
  // 每一个节点，都可以作为起点，也可以作为其他路径的一部分
  // 对类似题目进行改造
  // sum 和 path 是对应的
  // 可以去除一个 path 中的值，并加到 sum 上
  // 比如 path = [2,3,4]，sum 为 5
  // 实际有三种情况都可以 [3,4] 3, [4] -1 [] -4
  if (!node) return []
  const result = []
  if (node.val === sum)  {
    result.push([...path, node.val])
  }
  // 可以全都要
  let len = path.length
  let pathSum = 0
  for (let i = 0; i < len; i++) {
    pathSum += path[i]
    result.push(...pathSumHelper(node.left, sum - pathSum, [...path.slice(i+1)]))
    result.push(...pathSumHelper(node.right, sum - pathSum, [...path.slice(i+1)]))
  }
  return result
}
