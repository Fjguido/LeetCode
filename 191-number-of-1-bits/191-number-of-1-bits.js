/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
   var count = 0;
    while (n) {
      n &= (n-1) ;
      count++;
    }
    return count;
};