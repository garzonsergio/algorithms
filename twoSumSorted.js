// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

let nums = [3, 2, 4]
let target = 6

//This solution just works if the nums input is sorted
function twoSum(nums, target) {
    //Two pointers were created one at the begining and the other at the end of the array
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let sum = nums[left] + nums[right];
        //The left pointer moves to right if the sum is fewer than target
        if (sum < target) {
            left += 1
        }
        //The right pointer moves to left if the sum greater than target
        else if (sum > target) {
            right -= 1
        }
        //return the solution
        else {
            return [left, right]
        }
    }

}

console.log(twoSum(nums, target))