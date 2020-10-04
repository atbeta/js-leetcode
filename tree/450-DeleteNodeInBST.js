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
 * @param {number} key
 * @return {TreeNode}
 */
// 没有左右孩子，直接删除
// 有左孩子没有右孩子，用左孩子替代
// 没有左孩子有右孩子，用右孩子替代
// 既有左孩子又有右孩子，右孩子没有左孩子，右孩子替代
// 既有左孩子又有右孩子，右孩子也有左孩子：找到右孩子左孩子最左侧，把左孩子挂在这里，用右孩子替代
var deleteNode = function(root, key) {
  // 找节点
  let pre = null
  let current = root
  while (current && current.val !== key) {
    pre = current
    if (current.val > key) {
      current = current.left
    } else {
      current = current.right
    }
  }
  if (!current) return root
  // 没有左右孩子情况
  if (!current.left && !current.right) {
    if (!pre) {
      root = null
    } else if (pre.left && pre.left.val === key) {
      pre.left = null
    } else {
      pre.right = null
    }
    return root
  }
  // 没左有右
  if (!current.left && current.right) {
    if (!pre) {
      root = current.right
    } else if (pre.left && pre.left.val === key) {
      pre.left = current.right
    } else {
      pre.right = current.right
    }
    return root
  }
  // 没右有左
  if (current.left && !current.right) {
    if (!pre) {
      root = current.left
    } else if (pre.left && pre.left.val === key) {
      pre.left = current.left
    } else {
      pre.right = current.left
    }
    return root
  }
  if (current.left && current.right && !current.right.left) {
    current.right.left = current.left
    if (!pre) {
      root = current.right
    } else if (pre.left && pre.left.val === key) {
      pre.left = current.right
    } else {
      pre.right = current.right
    }
    return root
  }
  if (current.left && current.right && current.right.left) {
    // 找到current.right.left 的最左侧
    let theLeft = current.right.left
    while (theLeft.left) {
      theLeft = theLeft.left
    }
    theLeft.left = current.left
    if (!pre) {
      root = current.right
    } else if (pre.left && pre.left.val === key) {
      pre.left = current.right
    } else {
      pre.right = current.right
    }
    return root
  }
}
