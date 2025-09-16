// 217. Contains Duplicate JAVA Solution.
// https://leetcode.com/problems/contains-duplicate/

import java.util.Set;
import java.util.HashSet;

class Solution {
    public boolean containsDuplicate(int[] nums) {

        Set<Integer> dummySet = new HashSet<>();

        for (int i = 0; i < nums.length; i++ ){

            if (dummySet.contains(nums[i])) {
                return true;
            }

            dummySet.add(nums[i]);
        }

        return false;
    }
}