/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value && JSON.stringify(arr[i]) !== JSON.stringify(value)) {
      //этот весь код создаёт функцию которая удаляет из массива все элементы равные указанному значению
      newarr.push(arr[i]);
    }
  }
  return newarr;
};
//JSON.stringify превращает объекты и массивы в строку.Глянул в инете как правильно это делать
