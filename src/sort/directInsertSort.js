const ArrayUtil = require('../utils/arrayUtil');

const directInsertSort = (array) => {
    if (!Array.isArray(array)) throw new TypeError(`${array} 不是数组!`); 
    if (array.length <= 1) return [...array];

    const sortedArray = [array[0]];
    for (let i = 1; i < array.length; i++) {
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
}

if (require.main === module) {
    console.log(directInsertSort([-706,-93,-228]))
} else {
    module.exports = directInsertSort;
}
