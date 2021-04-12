/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  class ListNode {
    constructor(val, next) {
      this.value = val;
      this.next = next;
    }
  }
  const array = [];
  const got = (arr, obj) => {
    if (obj.value !== k) arr.push(obj.value);
    if (obj.next) {
      got(arr, obj.next);
    }
    return arr;
  };
  const set = (arr) => new ListNode(arr.shift(), arr.length > 0 ? set(arr) : null);
  return set(got(array, l));
}

module.exports = removeKFromList;
