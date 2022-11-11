/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
   
  for (let index = 0; index < nums.length; index++) {
    if (target <= nums[index]) {
      return index;
    }
  }
  return nums.length;
};

// we have an array of numbers in order from smallest to greatest and a target number
// we want to return the index position of the target number in the array 
// if the target number is not part of the array, we want to return the index of where it would be in the array

// questions to make sure of - are the numbers in order 
// are there decimals
// only whole numbers? 
// any negative numbers



