// 167. Two Sum II - Input Array Is Sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

import java.util.Arrays;

class Solution {
    public int[] twoSum(int[] numbers, int target) {


        System.out.println(Arrays.toString(numbers));
        System.out.println(target);

        for (int i = 0; i < numbers.length; i ++){

            System.out.println(numbers[i]);

            for (int j = i + 1; j < numbers.length; j ++){

                if (numbers[i] + numbers[j] == target) {
                    return new int[]{i + 1,j + 1};
                }

            }
        }

        return new int[0];
        
    }
}