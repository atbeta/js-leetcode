/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  // 分层遍历，但是如果没左右孩子，也要将null加入队列
  let queue = []
  queue.push(root)
  let result = []
  while (queue.length) {
    let current = queue.shift()
    if (current) {
      result.push(current.val)
    } else {
      result.push('null')
    }
    if (current) {
      queue.push(current.left)
      queue.push(current.right)
    }
  }
  // 清除最后的无用 null
  let p = result.length - 1
  while (result[p] === 'null') {
    result.pop()
    p--
  }
  return '[' + result.join(',') + ']'
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data === '[]') return null
  // 字符串转数组
  let nodeList = data.substring(1, data.length - 1).split(',')
  // 恢复树
  let root = null
  let queue = []
  // 从nodeList中取一个创建节点，
  while (nodeList.length) {
    // 从 queue 中取去待填充的节点
    if (!root) {
      let current = nodeList.shift()
      root = new TreeNode(parseInt(current))
      queue.push(root)
    } else {
      // 有 root 了，从queue中取节点进行填充
      // 出2个节点，填充当前queue中的节点
      let node1
      let node2
      node1 = nodeList.shift()
      node2 = nodeList.length > 0 ? nodeList.shift() : 'null'
      let treeCurrent = queue.shift()
      treeCurrent.left = node1 === 'null' ? null : new TreeNode(parseInt(node1))
      treeCurrent.right = node2 === 'null' ? null : new TreeNode(parseInt(node2))
      if (treeCurrent.left) {
        queue.push(treeCurrent.left)
      }
      if (treeCurrent.right) {
        queue.push(treeCurrent.right)
      }
    }
  }
  return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
