// 217. Contains Duplicate LeetCode Solution


/* PERSONAL NOTE:
We initially attempted to solve the problem with 2 loops focused around array's to compare the values. However, the brute force method had a runtime error due to the time limit being exceeded. To fix this we learned how to use a Set().

Since set's only allow unique values, we can check if the value already exisits in the set prior to adding it. If the set already contains the num, then we return ture, else we continue until all of the input has been checked. 

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let dummySet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (dummySet.has(nums[i])) {
      return true;
    }

    dummySet.add(nums[i]);
  }

  return false;
};

/*
217. Contains Duplicate - EASY

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/