/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  return generateTreesPartial(1,n)
};

function generateTreesPartial(start, end) {
  if (start > end) return []
  // 二者相等只有一种可能
  if (start === end) {
    let node = new TreeNode(start)
    return [node]
  }
  // end 比 start 大的时候，循环生成
  const result = []
  // start 为 root,左侧只能为null，右侧为 generateTreesPartial(start+1,end)
  // start 为 root + 1, 左侧为 start, start，右侧为 start + 2,end
  // 三轮循环
  for (let rootVal = start;rootVal <= end;rootVal++) {
    const leftNodes = generateTreesPartial(start, rootVal-1)
    const rightNodes = generateTreesPartial(rootVal+1, end)
    if (leftNodes.length === 0) {
      rightNodes.forEach(rightNode => {
        let node = new TreeNode(rootVal)
        node.right = rightNode
        result.push(node)
      })
    }
    if (rightNodes.length === 0) {
      leftNodes.forEach(leftNode => {
        let node = new TreeNode(rootVal)
        node.left = leftNode
        result.push(node)
      })
    }
    if (leftNodes.length && rightNodes.length) {
      leftNodes.forEach(leftNode => {
        rightNodes.forEach(rightNode => {
          let node = new TreeNode(rootVal)
          node.left = leftNode
          node.right = rightNode
          result.push(node)
        })
      })
    }
  }
  return result
}
