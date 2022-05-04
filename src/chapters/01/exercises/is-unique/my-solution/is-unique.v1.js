/**
 * Brute-force implementation.
 * Running time: O(N^2)
 * @param {string} str
 * @returns {boolean}
 */
function isUnique(str) {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str.charAt(i) === str.charAt(j)) return false;
    }
  }

  return true;
}

module.exports = isUnique;
