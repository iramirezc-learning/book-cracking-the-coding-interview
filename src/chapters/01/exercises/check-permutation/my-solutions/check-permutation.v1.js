/**
 * Brute-force implementation.
 * Running time: O(N+M)
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
function checkPermutation(str1, str2) {
  // if lengths are different, then permutation is not possible.
  if (str1.length !== str2.length) return false;

  const chars = {};

  // sum every char in str1
  for (let i = 0; i < str1.length; i++) {
    const char = str1.charAt(i);

    if (!chars[char]) {
      chars[char] = 0;
    }

    chars[char]++;
  }

  // subtract every char in the dictionary of str1 from str2
  for (let i = 0; i < str2.length; i++) {
    const char = str2.charAt(i);

    // if char does not exist in chars from str1
    // then permutation is not possible.
    if (undefined === chars[char]) return false;

    chars[char]--;
  }

  // finally, the sum of all chars should be 0
  // in order to be considered as a permutation
  for (let char in chars) {
    if (chars[char] !== 0) return false;
  }

  return true;
}

module.exports = checkPermutation;
