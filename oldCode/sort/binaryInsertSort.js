const binaryInsertSearch = require('./binaryInsertSearch');
const ArrayUtil = require('../utils/array');

/**
 * 二分插入排序
 * @param {*} array
 */
const binaryInsertSort = array => {
    const sortedArray = [];
    for (let i = 0; i < array.length; i++) {
        const insertIndex = binaryInsertSearch(sortedArray, array[i]);
        ArrayUtil.insert(sortedArray, insertIndex, array[i]);
    }

    return sortedArray;
};

module.exports = binaryInsertSort;
