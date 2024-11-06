/**
 * Compares two numbers
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {string}
 */
module.exports.compareTwoNumbers = function compareTwoNumbers(firstNumber, secondNumber) {
  function compareTwoNumbers(a, b) {
    if (a > b) {
      return '>';
    } else if (a < b) {
      return '<';
    } else if (a >= b) {
      return '>=';
    } else if (a <= b) {
      return '<=';
    } else {
      return '=';
    }
  }

  alert(compareTwoNumbers(4, 1));
  alert(compareTwoNumbers(4, 1));
  alert(compareTwoNumbers(4, 1));
  alert(compareTwoNumbers(4, 1));
  alert(compareTwoNumbers(4, 1));
};
