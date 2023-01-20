/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = [-1]
    let mx = 0;
    for( let i = 0 ; i < s.length ; i++ ){
        if( s.charAt(i) === '(' )
            stack.push(i)
        else{
            stack.pop();
            if( stack.length >= 1 )
                mx = Math.max(mx , i - stack.at(-1) );
            else
                stack.push(i);
        }
    }
    return mx;
};