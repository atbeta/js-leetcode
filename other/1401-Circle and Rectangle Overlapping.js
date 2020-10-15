/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function(radius, x_center, y_center, x1, y1, x2, y2) {
  // 计算圆相对方块的方位，这决定了我们怎么判断重叠
  // 方块在相对右上：计算左下角的点
  // 方块在相对右下，计算左上角的点
  // 方块在相对左上，计算右下角的点
  // 方块在相对左下，计算右上角的点
  // 方块在相对右，计算左侧全部的点
  // 方块在相对左，计算右侧全部的点
  // 方块在相对上，计算下侧全部的点
  // 方块在相对下，计算上侧全部的点
  let circle = {
    radius,
    x_center,
    y_center
  }
  // 如果整个圆在方块内
  if (x_center >= x1 && x_center <= x2 && y_center >= y1 && y_center <= y2) {
    return true
  }
  if (x1 >= x_center && y1 >= y_center) {
    // 右上
    if (isInCircle([x1, y1], circle)) {
      return true
    }
  }
  else if (x1 >= x_center && y2 <= y_center) {
    // 右下
    if (isInCircle([x1, y2], circle)) {
      return true
    }
  }
  else if (x2 <= x_center && y1 >= y_center) {
    // 左上
    if (isInCircle([x2, y1], circle)) {
      return true
    }
  }
  else if (x2 <= x_center && y2 <= y_center) {
    // 左下
    if (isInCircle([x2, y2], circle)) {
      return true
    }
  }
  else if (x1 >= x_center && x1 <= x_center + radius) {
    // 在右侧只有这种情况才存在重合
    return true
  } else if (x2 <= x_center && x2 >= x_center - radius) {
    // 在左侧只有这种情况才重合
    return true
  } else if (y1 >= y_center && y1 <= y_center + radius) {
    // 在上方只有这种情况才重合
    return true
  } else if (y2 <= y_center && y2 >= y_center - radius) {
    // 在下方只有这种情况才重合
    return true
  }
  return false
};

function isInCircle(point, circle) {
  // 判断一个点在不在一个圆范围内
  // 计算到圆心距离与半径差
  let [x, y] = point
  let {radius, x_center, y_center} = circle
  return Math.sqrt((x-x_center)**2 + (y-y_center)**2) <= radius

}
