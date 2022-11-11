/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    
        while(start <= end) {
            const mid = Math.floor((start + end)/2);
        
            if(nums[mid] < target) {
            start = mid + 1;
             } else {
             end = mid -1;
             }   
    }
    
    return start;
};

// we have an array of numbers in order from smallest to greatest and a target number
// we want to return the index position of the target number in the array 
// if the target number is not part of the array, we want to return the index of where it would be in the array



