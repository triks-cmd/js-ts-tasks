/**
 * Write a function which for every numbers (negative/positive numbers, zeros) in given array replaces:
 *  one digit numbers with number 1
 *  two digits numbers with number 2
 *  three digits numbers with number 3
 *  the rest numbers with number 4
 * @param {Array<number>} arr
 * @returns {Array<number>}
 */
module.exports.replacement = function replacement(arr) {
  return arr.map(num => {
    const length = Math.abs(num).toString().length;
    return length === 1 ? 1 : length === 2 ? 2 : length === 3 ? 3 : 4;
  }); //используем метод map чтобы пройдись по элементам данного массива
};
