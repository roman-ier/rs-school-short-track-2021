/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s = s2.split('');

  function f(a) {
    const ind = s.findIndex((i) => i === a);
    if (ind >= 0) {
      s[ind] = '-';
      return true;
    }
    return false;
  }
  return s1.split('').reduce((pv, i) => (f(i) ? pv + 1 : pv), 0);
}

module.exports = getCommonCharacterCount;
