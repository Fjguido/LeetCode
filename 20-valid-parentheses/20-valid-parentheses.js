/**
 * @param {string} s
 * @return {boolean}
 */

// match each string with its proper character 
// "()", "[]", "{}" = valid 
// not valid if string mix and match  ex:"{]"
//stack method to push open character and pop to take out unmatched character

var isValid = function(s) {
   let parentheses = {"{":"}", "[":"]", "(":")"}
    let parenthesesArray = []
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] in parentheses) {
            parenthesesArray.push(s[i])
        } else if (parentheses[parenthesesArray.pop()] !== s[i]) {
            return false
        } 
    }
    
    return parenthesesArray.length === 0 
}

