/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const value = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let result = 0;

    for (i=0; i < s.length; i++){
        const current = value[s[i]];
        const next = value[s[i+1]];

        if (current < next){
            result += next - current // IV -> 5 - 1 = 4
            i++
        } else {
            result += current
        }
    }

    return result; 
};