const ArrayUtil = require('../utils/arrayUtil');

const directInsertSort = (sourceArray) => {
    if (!Array.isArray(sourceArray)) throw new TypeError(`${sourceArray} 不是数组!`); 
    
    if (sourceArray.length <= 1) return sourceArray;

    const sortedArray = [sourceArray[0]];
    for (let i = 1; i < sourceArray.length; i++) {
        let j = 0;
        for (; j < sortedArray.length; j++) {
            if (sourceArray[i] < sortedArray[j]) {
                ArrayUtil.insert(sortedArray, j, sourceArray[i]);
                break;
            }
        }
       
        if (j === sortedArray.length) sortedArray.push(sourceArray[i]);
    }

    return sortedArray;
}

if (require.main === module) {
    console.log(directInsertSort([-706,-93,-228]))
} else {
    module.exports = directInsertSort;
}
