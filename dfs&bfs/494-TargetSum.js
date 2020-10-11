/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
// dfs 一棵完美二叉树，根是0，其他每一层节点值为nums中对应顺序的值依次*1 *-1
// 待补充动态规划解法
var findTargetSumWays = function(nums, S) {
  // 构造完美二叉树
  let tree = []
  tree.push(0)
  for (let i = 0; i < nums.length; i++) {
    // 将当前数字重复 2**(i+1)次, 一正一负依次填充
    let sign = 1 // 1表示填充为正，-1表示填充为负
    for (let j = 0; j < (1 << (i + 1)); j++) {
      tree.push(sign * nums[i])
      sign = - sign
    }
  }
  // dfs 该二叉树
  return dfs(tree, 0, S, [])
};

// i 表示当前节点
function dfs(tree, i, S, path) {
  // 如果当前节点是叶子节点，且其值=S，加入结果
  let count = 0
  if (2 * i + 1 > tree.length - 1) {
    if (tree[i] === S) {
      count ++
    }
  } else {
    path.push(tree[i])
    count += dfs(tree, 2*i+1, S-tree[i], path, count)
    count += dfs(tree, 2*i+2, S-tree[i], path, count)
    path.pop()
  }
  return count
}
