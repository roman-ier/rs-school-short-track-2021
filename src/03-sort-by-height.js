/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr2 = [];
  arr.forEach((i) => i !== -1 && arr2.push(i));
  arr2.sort((a, b) => a - b);
  return arr.map((i) => {
    if (i !== -1) {
      const [k] = arr2;
      arr2.shift();
      return k;
    }
    return i;
  });
}

module.exports = sortByHeight;
