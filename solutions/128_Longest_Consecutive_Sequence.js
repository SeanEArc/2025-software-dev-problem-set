// Solution for 128. Longest Consecutive Sequence

/*
NOTES:
We solved this problem by sorting the array then putting the numbers within a set to remove the duplicates. We looped through the set using "for of" to compare the current value with the previous value. If the curret value is exactly one more than the previous value, we increment the counter; else, we reset the counter to 1. We are only returning the maxCounter which is the largest sequence that gets iterated through.

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    if (nums.length == 0){
        return 0;
    }

    nums.sort((a,b) => a - b );

    let numsSet = new Set(nums)

    let counter = 1;
    let maxCounter = 1;
    let previousVal = null;

    for (let val of numsSet){

        if (previousVal !== null && val - 1 == previousVal){
            counter+=1
        } else {
            counter = 1;
        }

        maxCounter = Math.max(maxCounter, counter)
        previousVal = val

    }
    
    return maxCounter
    
};