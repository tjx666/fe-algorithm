const ArrayUtil = require('../utils/array');

/**
 * 直接插入排序
 * @param {*} array
 */
const directInsertSort = array => {
    const sortedArray = [];
    for (let i = 0; i < array.length; i++) {
        let j = 0;
        for (; j < sortedArray.length; j++) {
            if (array[i] < sortedArray[j]) {
                ArrayUtil.insert(sortedArray, j, array[i]);
                break;
            }
        }

        if (j === sortedArray.length) sortedArray.push(array[i]);
    }

    return sortedArray;
};

module.exports = directInsertSort;
