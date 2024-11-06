/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  function sumOfDigits(n) {
    let sum = 1;
    let num = Math.abs(n);

    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }

    return sum;
  }

  let number = 1;
  alert('Сумма всех цифр числа ' + number + ' равна: ' + sumOfDigits(number));
};
