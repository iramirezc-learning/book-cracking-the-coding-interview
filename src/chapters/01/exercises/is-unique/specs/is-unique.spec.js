const isUnique = require("../index");

describe("isUnique", () => {
  describe("easy test-cases", () => {
    const allChars =
      " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

    test("returns true if the string is empty", () => {
      expect(isUnique("")).toEqual(true);
    });

    test("returns true if all characters are unique in the string", () => {
      expect(isUnique(allChars)).toEqual(true);
    });

    test("returns false if a character is repeated in the string", () => {
      expect(isUnique(allChars + "~")).toEqual(false);
    });
  });
});
