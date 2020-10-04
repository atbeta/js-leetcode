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
 * @return {number}
 */
// dfs 记录路径与和，符合条件的加入 result, bfs 搜索节点逐个计算 => 某测试用例高度为1000，会超出空间
var pathSum = function(root, sum) {
  let result = []
  // bfs 搜索节点并逐个计算
  let queue = []
  queue.push(root)
  while (queue.length) {
    let current = queue.shift()
    dfs(current, [], sum, result)
    if (current.left) {
      queue.push(current.left)
    }
    if (current.right) {
      queue.push(current.right)
    }
  }
  return result.length
};

function dfs(node, path, sum, result) {
  if (!node) return
  if (node.val === sum) {
    result.push([...path, node.val])
  }
  dfs(node.left, [...path, node.val], sum - node.val, result)
  dfs(node.right, [...path, node.val], sum - node.val, result)
}

// 优化方法，因只需要记录数量，不必记录路径及结果，修改即可，可通过,待改进 40.21% 30.47%
var pathSum2 = function(root, sum) {
  if (!root) return 0
  let result = 0
  // bfs 搜索节点并逐个计算
  let queue = []
  queue.push(root)
  while (queue.length) {
    let current = queue.shift()
    result += dfs2(current, sum)
    if (current.left) {
      queue.push(current.left)
    }
    if (current.right) {
      queue.push(current.right)
    }
  }
  return result
};

function dfs2(node, sum) {
  if (!node) return 0
  let count = 0
  if (node.val === sum) {
    count ++
  }
  count += dfs2(node.left,  sum - node.val)
  count += dfs2(node.right, sum - node.val)
  return count
}
