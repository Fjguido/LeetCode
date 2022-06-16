/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(stringA, stringB) {
    // Sanitizing
    // dont understand this
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  // sorting
  const stringASorted = stringA.split("").sort().join("");
  const stringBSorted = stringB.split("").sort().join("");

  return stringASorted === stringBSorted;
};