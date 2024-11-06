/**
 * Given k (number). Evaluate the expression: 4 * (2k - 1)
 * @param {number} k - number
 * @returns {number}
 */
module.exports.evalExpr = function evalExpr(k) {
  function evaluateExpression(k) {
    return 4 * (2 * k - 1);
  }

  let k = 1;
  alert(evaluateExpression(k));
};
