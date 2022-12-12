/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
 let i = 1;
    let sum = 0;
    let oldNum = 0;
    let newNum = 1;
    while (i <= n){
        sum = oldNum + newNum;
        oldNum = newNum;
        newNum = sum
        i++;
    }
    return sum;
};