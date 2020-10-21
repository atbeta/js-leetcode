/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
var findSmallestRegion = function(regions, region1, region2) {
  // 最近公共祖先问题的变形问题
  // 使用 Map 来存储节点，只需要存储父节点，然后逐级向上查询即可
  let parentMap = new Map()
  for (let i = 0; i < regions.length; i++) {
    regions[i].slice(1).forEach(child => {
      parentMap.set(child, regions[i][0])
    })
  }
  // 找到 region1 的父节点链，之后找 region2 的父节点链的同时查询其是否在 region1 的父节点链中，查询到的第一个即是答案
  let path = []
  while (region1) {
    path.push(region1)
    region1 = parentMap.get(region1)
  }
  while (region2) {
    if (path.includes(region2)) {
      return region2
    }
    region2 = parentMap.get(region2)
  }
}
