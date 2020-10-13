/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.list = []
  this.minList = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.list.push(x)
  if (!this.minList.length) {
    this.minList.push(x)
  } else {
    if (x < this.minList[this.minList.length - 1]) {
      this.minList.push(x)
    } else {
      this.minList.push(this.minList[this.minList.length - 1])
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.list.pop()
  this.minList.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.list[this.list.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minList[this.minList.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
