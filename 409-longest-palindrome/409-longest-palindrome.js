/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const map = {}
    let pairs = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            delete map[s[i]];
            pairs++;
        } else {
            map[s[i]] = 1;
        }
    }
    
    let maxLen = pairs * 2 + (Object.keys(map).length >= 1 ? 1 : 0);
    return maxLen;
};