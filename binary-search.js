/**
 * 
 Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
 * 
 */

/** 
 Example 1
 Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4 

*/

/**
 *
 * This function accepts a sorted array and a value
 *
 * Create a left pointer at the start of the array, and a right pointer at the end of the array
 *
 * While the left pointer comes before the right pointer
 *  Create a pointer in the middle
 *  If you find the value you want, return the
 *  If the value is too small, move the left pointer up
 *  If the value is too large, move the right pointer down
 *
 * If you never find the value, return -1
 *
 */

const search = (nums, target) => {
    // for(let i =0; i < nums.length; i++) {
    //     if(nums[i] === target) {
    //         return nums.indexOf(target)
    //     }
    // }

    let start = 0;
    let end = nums.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (nums[middle] !== target && start <= end) {
        if (target < nums[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }

        middle = Math.floor((start + end) / 2);
    }
    if (nums[middle] == target) {
        return middle;
    } else {
        return -1;
    }
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
