/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbs, target) {
let result = "";

if (result === "") {
  for (let i = 0; i < numbs.length; i++) {
    for (let j = 0; j < numbs.length; j++) {
       

      if (i!== j) {

        if (numbs[i] + numbs[j] === target) {
            result=[j, i];

        }
      }
    }
  }
}
return result

};






