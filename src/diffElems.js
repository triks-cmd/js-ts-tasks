/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  return new Set(arr).size; //создаёться обьект множества из массива арр потом сет удаляет все повторяющееся элементы а вот сайз возвращает количество элементов
};
