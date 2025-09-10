// 125. Valid Palindrome Solution

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    if (!s){
      return true
    }

    let stringStripped = s.toLowerCase().replace(/[^a-z0-9]/g,"").split("").join("")

    let stringReversed = stringStripped.split("").reverse().join("")

    if (stringStripped == stringReversed){
      return true
    }

    return false
    
};
