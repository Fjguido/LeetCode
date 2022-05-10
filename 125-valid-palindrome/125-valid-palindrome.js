/**
 * @param {string} s
 * @return {boolean}
 */


var isPalindrome = function(s) {
   const nonReversedStr = s.replace(/[\W_]/g, "").toLowerCase();
    let reversedString = ""
    for (let i of nonReversedStr.split("")) {
        reversedString = i + reversedString
    }

    return reversedString === nonReversedStr
}
