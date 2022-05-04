/**
 * Using a hash-table.
 * Running time: O(N)
 * @param {string} str
 * @returns {boolean}
 */
function isUniqueChars(str) {
  const charSet = {};

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);

    if (charSet[code]) return false;

    charSet[code] = true;
  }

  return true;
}

module.exports = isUniqueChars;
