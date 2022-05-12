/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// give the index of the target number in a given array 
// if target number does not exist in array return -1

var search = function(nums, target) {
        for( i = 0 ; i < nums.length ; i++){
        if(nums[i] == target){
            return i;
        }
    }

    return -1; 
}
    
