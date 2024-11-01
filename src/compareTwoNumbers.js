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

  alert(compareTwoNumbers(5, 3));
  alert(compareTwoNumbers(3, 5));
  alert(compareTwoNumbers(5, 5));
  alert(compareTwoNumbers(5, 5));
  alert(compareTwoNumbers(3, 5));
};
