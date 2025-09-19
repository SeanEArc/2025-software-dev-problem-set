// Solution to 155. Min Stack JAVA Solution.
// https://leetcode.com/problems/min-stack/


/*    PERSONAL NOTE: 
 * Took a while to understand since I was trying to solve the problem with JavaScript and I didn't realize this was classes. After we learned that we were only creating methods for after initialization, it made a lot more sense. We also learned how protoypes work in JavaScript which is just another way of creating methods for classes.
 * 
 */

import java.util.Stack;

class MinStack {

    private Stack<Integer> stack;
    private Stack<Integer> minStack;

    public MinStack() {

        stack = new Stack<>();
        minStack = new Stack<>();
        
    }
    
    public void push(int val) {

        stack.push(val);
        if (minStack.isEmpty()) {
            minStack.push(val);
        } else {
            minStack.push(Math.min(val, minStack.peek()));
        }
        
    }
    
    public void pop() {

        stack.pop();
        minStack.pop();
        
    }
    
    public int top() {

        return stack.peek();
        
    }
    
    public int getMin() {

        return minStack.peek();
        
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */