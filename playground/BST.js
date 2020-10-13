// 二叉搜索树的删除

class TreeNode {
  constructor (val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BST {
  constructor (nums) {
    // 使用提供的数组生成排序二叉树，如果有重复数字将被去重
    const list = Array.from(new Set(nums)).sort((a, b) => a - b)
    this.root = buildTree(list)
  }
  deleteNode(val) {}
  // 插入
  insertNode(val) {
    const insert = (node, val) => {
      if (!node) {
        return new TreeNode(val)
      }
      if (node.val > val) {
        node.left = insert(node.left, val)
      }
      if (node.val < val) {
        node.right = insert(node.right, val)
      }
      return node
    }
    insert(this.root, val)
  }
}

function buildTree(nums) {
  let len = nums.length
  if (len === 0) return null
  // 否则找到中间的元素，生成节点
  const mid = len >> 1
  let node = new TreeNode(nums[mid])
  node.left = buildTree(nums.slice(0, mid))
  node.right = buildTree(nums.slice(mid+1))
  return node
}

let nums = [1]

const myBST = new BST(nums)
myBST.insertNode(2)
console.log(myBST)

