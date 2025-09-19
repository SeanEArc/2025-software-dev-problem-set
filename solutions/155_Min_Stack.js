// 155. Min Stack JavaScript Solution. 

/* 
PERSONAL NOTES ARE IN THE JAVA SOLUTION
*/

var MinStack = function() {

    this.stack = [];
    this.minStack = [];
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {

    this.stack.push(val);

    let currentMin; 

    if (this.minStack.length == 0) {
        currentMin = val;
        
    } else {
        currentMin = Math.min(val, this.minStack[this.minStack.length - 1])
    }

    this.minStack.push(currentMin)

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {

    this.stack.pop();
    this.minStack.pop();    
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {

    return this.stack[this.stack.length - 1];
    
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {

    return this.minStack[this.minStack.length -1]

};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */