/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(arr) {
  const arr2 = [];
  arr.forEach((element) => {
    arr2.push(...element);
  });
  // arr2.reverse().findIndex((i) => i === 0);
  const row = Math.ceil(
    (arr2.length - arr2.reverse().findIndex((i) => i === 0)) / arr[0].length,
  ) - 1;
  return arr.reduce(
    (pr, it, ind) => (ind < row ? pr + it.reduce((pv, i) => pv + i, 0) : pr),
    0,
  );
}

module.exports = getMatrixElementsSum;
