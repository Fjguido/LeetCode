/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   const viewed = []; // access by index is faster that Map
    for(let i=0; ;i++){ //according to task description - solution is always present - no need to check <.length or something like this
        const current = nums[i];
        const j = viewed[current];
        if(j !== undefined){
            return [i, j];
        }

        viewed[target - current] =  i; 
    }
};








