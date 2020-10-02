/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
  // 从左到右进行映射，如果发现字符映射过，就检查是否相同
  // 需要进行两次，分别检查
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false
    let sMap = new Map()
    let tMap = new Map()
    for (let i = 0; i < t.length; i++) {
      if (sMap.has(s[i]) && sMap.get(s[i]) !== t[i]) {
        return false
      }
      if (tMap.has(t[i]) && tMap.get(t[i]) !== s[i]) {
        return false
      }
      sMap.set(s[i], t[i])
      tMap.set(t[i], s[i])
    }
    return true
  };
