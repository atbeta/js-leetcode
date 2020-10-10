/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
// 构造图，y 比 x 有钱的意义即为有路径可以从y到达x
  // 暴力方法，以每一个 x 为起点 bfs，找到所有比他有钱的人,5.26% 37.50%，待优化
var loudAndRich = function(richer, quiet) {
  let richerFull = []
  // 构造图
  let richerMap = new Map()
  for (let i = 0; i < richer.length; i++) {
    if (!richerMap.get(richer[i][1])) {
      richerMap.set(richer[i][1], [])
    }
    richerMap.get(richer[i][1]).push(richer[i][0])
  }
  // 构造完整有钱列表
  // 要注意这里，自己也算所拥有的钱不少于自己的人，单独加上
  for (let i = 0; i < quiet.length; i++) {
    richerFull[i] = [i, ...bfs(i, richerMap)]
  }
  return richerFull.map(item => {
    // 从数组中返回quietness值最小的一个
    return item.sort((a,b) => quiet[a]-quiet[b])[0]
  })
};

function bfs(person, map) {
  // 返回比 current 有钱的列表
  let queue = []
  let result = new Set()
  queue.push(...(map.get(person) || []))
  while (queue.length) {
    let current = queue.shift()
    if (!result.has(current)) {
      result.add(current)
      // 将比 current 有钱的加入队列
      let currentRicher = map.get(current) || []
      queue.push(...currentRicher)
    }
  }
  return Array.from(result)
}
