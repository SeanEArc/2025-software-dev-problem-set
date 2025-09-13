// 242. Valid Anagram JAVA Solution.
// https://leetcode.com/problems/valid-anagram/

import java.util.HashMap;

class Solution {
    public boolean isAnagram(String s, String t) {

        if (s.length() != t.length()) {
            return false;
        }

        Map<Character, Integer> dummyMap = new HashMap<>();
        Map<Character, Integer> dummyMap2 = new HashMap<>();

        for (int i = 0; i < s.length(); i ++ ){

            char charS = s.charAt(i);
            char charT = t.charAt(i);

            // dummyMap.put(charS, dummyMap.getOrDefault(charS, 0) + 1); --- alternative way to do this
            if (!dummyMap.containsKey(charS)){
                dummyMap.put(charS, 1);
            } else {
                dummyMap.put(charS, dummyMap.get(charS) + 1);
            }

            if (!dummyMap2.containsKey(charT)){
                dummyMap2.put(charT, 1);
            } else {
                dummyMap2.put(charT, dummyMap2.get(charT) + 1);
            }

        }

        // This checks if dummyMap and dummyMap2 have the same key-value pairs.

        return dummyMap.equals(dummyMap2);
        
    }
}