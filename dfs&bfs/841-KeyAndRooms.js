/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
// BFS 写法
var canVisitAllRooms = function(rooms) {
  let visited = []
  let queue = []
  queue.push(0)
  while (queue.length) {
    let current = queue.shift()
    visited.push(current)
    // 查看当前能进的房间，如果没进过，就加入队列
    for (let i = 0; i < rooms[current].length; i++) {
      if (!visited.includes(rooms[current][i]) && !queue.includes(rooms[current][i])) {
        queue.push(rooms[current][i])
      }
    }
  }
  return rooms.length === visited.length
}

// DFS 代码
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRoomsDFS = function(rooms) {
  let visited = new Set()
  dfs(0, rooms, visited)
  return visited.size === rooms.length
};

function dfs(current, rooms, visited) {
  // 访问
  visited.add(current)
  let next = rooms[current]
  for (let i = 0; i < next.length; i++) {
    if (!visited.has(next[i])) {
      dfs(next[i], rooms, visited)
    }
  }
}
