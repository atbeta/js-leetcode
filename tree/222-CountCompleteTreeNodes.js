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
 * @return {number}
 */
var countNodes = function(root) {
  if (!root) return 0
  if (!root.left && !root.right) return 1
  const leftCount = treeLeavesCount(root.left)
  const rightCount = treeLeavesCount(root.right)
  const lastLevelFullCount = 2 * Math.max(leftCount, rightCount)
  return lastLevelFullCount - 1 + leftCount + rightCount
};

function treeLeavesCount(root) {
  if (!root) return 0
  if (!root.left && !root.right) return 1
  return treeLeavesCount(root.left) + treeLeavesCount(root.right)
}
