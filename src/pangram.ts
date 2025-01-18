/**
 * Determines if the provided string or number is a pangram.
 * @param {string | number} word - The input string or number.
 * @returns {boolean} - Returns true if it's a pangram, otherwise false.
 */
module.exports.pangram = (word: string | number): boolean => {
  const str = word.toString().toLowerCase();
  const check = (chars: string) => chars.split('').every(char => str.includes(char));
  return typeof word === 'string' ? check('abcdefghijklmnopqrstuvwxyz') : check('0123456789');
};
