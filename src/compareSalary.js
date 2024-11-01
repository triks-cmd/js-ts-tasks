/**
 * Compares three salaries and find the difference between the max and the min
 * @param {number} firstSalary
 * @param {number} secondSalary
 * @param {number} thirdSalary
 * @returns {number}
 */
module.exports.compareSalary = function compareSalary(firstSalary, secondSalary, thirdSalary) {};
function salaryDifference(salary1, salary2, salary3) {
  let maxSalary = Math.max(salary1, salary2, salary3);
  let minSalary = Math.min(salary1, salary2, salary3);
  return maxSalary - minSalary;
}

let salary1 = 30000;
let salary2 = 50000;
let salary3 = 80000;
alert(salaryDifference(salary1, salary2, salary3));
