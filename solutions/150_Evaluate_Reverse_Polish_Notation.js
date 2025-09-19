// 150. Evaluate Reverse Polish Notation Solution.

/*

I SOLVE THIS WITHOUT ASSISTANCE! I initially used a Map to store the operators, but then I realized that a Set would be more efficient since we only need to check if the opeerator exists. I didn't think that the if/else approach would be efficient; however, luckily, it was the most efficient approach.

*/


/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    const dummyStack = [];

    const dummySet = new Set(["+","-","*","/"]);

    for (num of tokens ) {

        if (!dummySet.has(num)){
            dummyStack.push(Number(num))

        } else if (num == "+") {
            a = dummyStack.pop()
            b = dummyStack.pop()
            dummyStack.push(b + a)
            
        } else if (num == "-") {
            a = dummyStack.pop()
            b = dummyStack.pop()
            dummyStack.push(b - a)
            
        } else if (num == "*") {
            a = dummyStack.pop()
            b = dummyStack.pop()
            dummyStack.push(b * a)
            
        } else  if (num == "/") {
            a = dummyStack.pop()
            b = dummyStack.pop()
            dummyStack.push(Math.trunc(b / a))
            
        }

    }

    return dummyStack[0]

};