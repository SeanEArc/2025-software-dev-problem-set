// 20. Valid Parentheses ... Solution.
/*
HOW IT WORKS:
We used a stack data structure to solve the problem. We created a dummy map to store the closing parentheses as keys and the opening parentheses as values. We looped through the array and pushed the opening parentheses into the stack. If we encountered a closing parentheses, we checked if the stack was empty or if the top of the stack did not match the corresponding opening parentheses from the dummy map. If the condition was met, we returned false. If the closing parentheses matched the top of the stack, we popped the top of the stack. 

To validate the stack, we check if the stack is empty at the end of the loop to check if all of the parentheses were closed.

New item learned: Stack data structure

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const stackArray = [];

    const dummyMap = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    };

    for (let char of s) {

        if ( char == "(" || char == "[" || char == "{" ){
            stackArray.push(char)
        } else {

            if (stackArray.length == 0 || stackArray[stackArray.length - 1] != dummyMap[char]) {
                return false;
            }

            stackArray.pop();
        }

    }

    return stackArray.length == 0;
    
};