/**
 * @param {string} s
 * @return {boolean}
 */

// match each string with its proper character 
// "()", "[]", "{}" = valid 
// not valid if string mix and match  ex:"{]"
//stack method to push open character and pop to take out unmatched character

var isValid = function(s) {
    const stack = [];
  const characters = { ')': '(', '}': '{', ']': '['};
for (const char of s) {
      
    if (!characters[char]){
       stack.push(char); 
    } 
    else if (stack.pop() !== characters[char]){
        return false;
    } 
  }
  return stack.length === 0;
    
}

