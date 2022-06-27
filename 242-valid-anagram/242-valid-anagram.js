/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  var lenA = s.length;
  var lenB = t.length;
  var map = {};

  if (lenA !== lenB) return false;

  for (var i = 0; i < lenA; i++) {
    if (!map[s[i]]) map[s[i]] = 0;
    map[s[i]]++;
  }

  for (var j = 0; j < lenB; j++) {
    if (!map[t[j]]) return false;
    map[t[j]]--;
  }

  return true;
};

// function isAnagram(stringA, stringB) {
//   // Sanitizing
//   stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
//   stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

//   // sorting
//   const stringASorted = stringA.split("").sort().join("");
//   const stringBSorted = stringB.split("").sort().join("");

//   return stringASorted === stringBSorted;
// }