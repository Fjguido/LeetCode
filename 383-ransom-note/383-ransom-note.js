/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
     let magazineCount = {}
    
    for (let char of magazine) {
        if (magazineCount[char]) {
            magazineCount[char] += 1 
        } else {
            magazineCount[char] = 1 
        }
    }
    
    for (let char of ransomNote) {
        if (!magazineCount[char]) {
            return false
        }
        magazineCount[char] --
    }
    return true
};