/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  function volumeOfCone(radius, height) {
    const pi = Math.PI;
    return (1 / 3) * pi * Math.pow(radius, 2) * height;
  }

  let r = 5;
  let h = 2;
  alert(volumeOfCone(r, h));
};
