/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const arr = [];

  while (names.length > 0) {
    let a = names[0];

    names.shift();
    if (arr.find((k) => a === k)) {
      for (let i = 1; i <= arr.length; i++) {
        const c = `${a}(${i})`;

        if (!arr.find((t) => c === t)) {
          a = c;
          break;
        }
      }
    }

    arr.push(a);
  }

  return arr;
}

module.exports = renameFiles;
