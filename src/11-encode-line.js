/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  console.log(arr);
  let def = 0;
  let res = '';
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      res += ((i - def) > 1 ? i - def : '') + arr[i - 1];
      def = i;
    }
  }

  return res;
}
module.exports = encodeLine;
