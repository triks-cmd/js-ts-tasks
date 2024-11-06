/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {
  let maxSalary = Math.max(firstSalary, secondSalary, thirdSalary);
  let minSalary = Math.min(firstSalary, secondSalary, thirdSalary);
  return maxSalary - minSalary;
};

let salary1 = 100;
let salary2 = 300;
let salary3 = 500;
alert(salaryDifference(salary1, salary2, salary3));
