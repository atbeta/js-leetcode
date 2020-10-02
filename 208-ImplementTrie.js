/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.children = new Map()
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  // 从根节点向下查找，有该key继续，没有该key创建
  let current = this
  for (let i = 0; i < word.length; i++) {
    if (!current.children.get(word[i])) {
      current.children.set(word[i], new Trie())
    }
    current = current.children.get(word[i])
  }
  // 单词结尾，添加（''）映射
  if (!current.children.get('')) {
    current.children.set('', new Trie())
  }
}

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  // 从根节点开始找
  let current = this
  for (let i = 0; i < word.length; i++) {
    if (!current || !current.children.get(word[i])) {
      return false
    } else {
      current = current.children.get(word[i])
    }
  }
  // 检查单词末尾
  return Boolean(current.children.get(''))
}

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
// 从根节点开始找
  let current = this
  for (let i = 0; i < prefix.length; i++) {
    if (!current || !current.children.get(prefix[i])) {
      return false
    } else {
      current = current.children.get(prefix[i])
    }
  }
  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

