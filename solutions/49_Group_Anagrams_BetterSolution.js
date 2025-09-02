// Watched video on solution. This solution was more efficient.
/*
HOW IT WORKS:
For each string in the array, we sort the letters in the string and join them. If the sorted string does not exsist in the dictionary then we create a new key with the sorted string and put the original string in an array as it's value. If the key does exsist, then we just push the original value into the already exsisting key.

Object.values() is used to return just the values of the dictionary as an array of arrays.

This is much better than the brute force method since it only iterates through the input array once. 
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {

    let dummyDict = {};

    for (let i = 0; i < strs.length; i++) {

        let updatedString = strs[i].split("").sort().join("")

        if (!dummyDict[updatedString]) {
            dummyDict[updatedString] = [strs[i]]
        } else {
            dummyDict[updatedString].push(strs[i])
        }

    }

    return Object.values(dummyDict)
    
};

/*
49. Group Anagrams - Medium

Topics

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
 */