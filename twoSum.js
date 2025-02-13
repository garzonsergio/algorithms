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

let nums = [2, 11, 7, 15]
let target = 9


//This solution doesn't care if have repeated numbers, or if is unsorted
//but use a hashMap instead of two Pointers
// O(n) 

function twoSum(nums, target) {

    let numbersMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        //While fills the hashMap is looking if was already saved a value that 
        //complements with the current one, and return if is afirmative the case.
        const complement = target - nums[i]
        console.log(complement, nums[i],numbersMap.has(complement) )
        if(numbersMap.has(complement)){
            return [numbersMap.get(complement), i]
        }
        numbersMap.set(nums[i], i)
    }
//As the array loops through the array just once time, the order is O(n)

}

console.log(twoSum(nums, target))