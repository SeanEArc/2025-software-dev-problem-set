// 242. Valid Anagram Solution:

/* PERSONAL NOTE: 
We initially attempted to solve the problem by converting the string's into an array then using a for loop to see if the letter exsist in both arrays, then removing the value by using splice. We ran into problem if there was multiple of the same letter due to the splice only remove the first instance of the letter. 

We chose to do a different approach by using 2 hash maps to count the number of times each letter appears in the string. Then we compared the 2 hash maps to see if they were equal.

This was the score of the solution:
Runtime - 9ms
Beats 86.05%
Memory - 57.26MB
Beats 66.17%

*/




/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if (s.length != t.length){
        return false
    }
    
    const letterCount1 = {}
    const letterCount2 = {}

    for (let i = 0; i < s.length; i++){

        let char1 = s[i];
        let char2 = t[i];

        letterCount1[char1] = (letterCount1[char1] || 0) + 1;
        letterCount2[char2] = (letterCount2[char2] || 0) + 1;

    }

    for (char in letterCount1 ){
        if (letterCount1[char] != letterCount2[char]){


            return false
        }
    }

    return true

    
};


/*242. Valid Anagram - EASY

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters. */