const binaryInsertSearch = require('./binaryInsertSearch');
const ArrayUtil = require('../utils/arrayUtil');

/**
 * 二分插入排序
 * @param {*} array 
 */
const binaryInsertSort = (array) => {
    if (!Array.isArray(array)) throw new TypeError(`${array} 不是数组!`); 

    const sortedArray = [];
    for (let i = 0; i < array.length; i++) {
        const insertIndex = binaryInsertSearch(sortedArray, array[i]);
        ArrayUtil.insert(sortedArray, insertIndex, array[i]);
    }

    return sortedArray;
}

module.exports = binaryInsertSort;