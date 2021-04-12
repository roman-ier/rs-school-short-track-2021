/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return n
    .toString()
    .split('')
    .reduce((previousValue, _, index, array) => {
      const arr = [...array];
      arr[index] = '';
      const k = parseInt(arr.join(''), 10);
      if (k > previousValue) return k;
      return previousValue;
    }, 0);
}

module.exports = deleteDigit;
