/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
     //hashmap
    let storage = {};
   
    // itereate through every element in array -> extracting the index and the actual number out to compute what im using in the storage device
    for(let [index, num] of nums.entries()) {
        if(storage[num] !== undefined) return [storage[num], index];
        storage[target-num] = index;
    }
}






