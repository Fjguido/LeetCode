/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(array) {
    if ( array === undefined || array.length === 0) {
       return ""
    }   
    A = array.sort()
    a = A[0], b = A[A.length - 1]
    var i = 0
    while ( i < a.length && a.charAt(i) == b.charAt(i)) i++ 
    return a.substring(0,i)
};