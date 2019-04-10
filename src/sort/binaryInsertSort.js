const binaryInsertSearch = require('../binaryInsertSearch');
const ArrayUtil = require('../utils/arrayUtil');

const binaryInsertSort = (array) => {
    if (!Array.isArray(array)) throw new TypeError(`${array} 不是数组!`); 
    if (array.length <= 1) return array;

    const sortedArray = [array[0]];
    for (let i = 1; i < array.length; i++) {
        const insertIndex = binaryInsertSearch(sortedArray, array[i]);
        ArrayUtil.insert(sortedArray, insertIndex, array[i]);
    }

    return sortedArray;
}

module.exports = binaryInsertSort;