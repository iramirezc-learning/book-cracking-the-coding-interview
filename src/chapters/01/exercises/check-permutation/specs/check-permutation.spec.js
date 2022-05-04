const checkPermutation = require("../index");

describe("checkPermutation", () => {
  describe("easy test-cases", () => {
    test("returns true if one string is a permutation of the other", () => {
      const str1 = "evil";
      const str2 = "vile";

      expect(checkPermutation(str1, str2)).toEqual(true);
    });

    test("returns false if two given strings are different", () => {
      const str1 = "abcd";
      const str2 = "wxyz";

      expect(checkPermutation(str1, str2)).toEqual(false);
    });
  });
});
