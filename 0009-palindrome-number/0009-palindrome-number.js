/**
 * @param {number} x
 * @return {boolean}
 */

// numbers need to be the same when read in reverse 
// dont solve it without changing interger to a string
var isPalindrome = function(x) {
    if ( x < 0 || x % 10 === 0 && x !== 0) {
        return false;
    }
    
    let reverse_x = 0;
    while (x > reverse_x) {
        reverse_x = reverse_x * 10 + x % 10;
        if (reverse_x === x) {
            return true;
        }
        x = Math.floor(x / 10);
    }
    return reverse_x === x 
};