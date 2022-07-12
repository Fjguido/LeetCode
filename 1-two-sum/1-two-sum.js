/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
const complete = {};
    for(let i=0; i<nums.length; i++){
        if(complete[nums[i]]>=0){
            return [complete[nums[i]],i]
        }
        complete[target-nums[i]] = i
    }
    
};






