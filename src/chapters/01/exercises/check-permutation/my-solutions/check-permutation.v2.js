/**
 * Sorting both strings and compare.
 * Running time: Depends on the sorting algorithm.
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
function checkPermutation(str1, str2) {
  // if lengths are different, then permutation is not possible.
  if (str1.length !== str2.length) return false;

  const sort1 = str1.split("").sort();
  const sort2 = str2.split("").sort();

  for (let i = 0; i < sort1.length; i++) {
    if (sort1[i] !== sort2[i]) return false;
  }

  return true;
}

module.exports = checkPermutation;
