/**
 * Check if an {object} contains property {prop}
 * @param {Object} object
 * @param {Object} prop
 * @returns {boolean}
 */
module.exports.hasProperty = function hasProperty(object, prop) {
  return prop in object; // значиться так если свойство проп существует в обьекте возвращаеться true а если не сущетвует то фалсе
};
