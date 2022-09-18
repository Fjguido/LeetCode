/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    const arr = new Array(26).fill(-1);

  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 97;
    if (arr[index] === -1) {
      arr[index] = i;
    } else if (i - arr[index] - 1 !== distance[index]) {
      return false;
    }
  }
  return true;


};