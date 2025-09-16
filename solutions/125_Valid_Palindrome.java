// 125. Valid Palindrome JAVA solution
// https://leetcode.com/problems/valid-palindrome/

class Solution {
    public boolean isPalindrome(String s) {
        
        if (s == null){
            return true;
        }

        String cleanedString = s.toLowerCase().replaceAll("[^a-z0-9]", "");

        String reversedString = new StringBuilder(cleanedString).reverse().toString();

        if (cleanedString.equals(reversedString)){
            return true;
        }

        return false;
        
    }
}