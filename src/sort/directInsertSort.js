const ArrayUtil = require('./arrayUtil');

const directInsertSort = (sourceArray) => {
    if (sourceArray.length <= 1) {
        return sourceArray;
    }

    sortedArray = [sourceArray[0]];
    for (let i = 1; i < sourceArray.length; i++) {
        let j = 0;
        for (; j < sortedArray.length; j++) {
            if (sourceArray[i] < sortedArray[j]) {
                ArrayUtil.insert(sortedArray, j - 1, sourceArray[i]);
                break;
            }
        }

       
        if (j === sortedArray.length) {
            sortedArray.push(sourceArray[i]);
        }
    }

    return sortedArray;
}

if (require.main === module) {
    console.log(directInsertSort([3, 2, 1, 3, 8, 5, 4, 2, 1, 6, 2, 111, -2, -9]))
} else {
    module.exports = directInsertSort;
}
