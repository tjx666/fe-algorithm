const assert = require('assert');

/**
 * 快速排序
 * @param {*} array 
 */
const quickSort = (array) => {
    const resultArray = [...array];

    ! function sort(array, left = 0, right = array.length - 1) {
        if (left >= right) return resultArray;
        const referenceNumber = resultArray[left];

        let i = left;
        let j = right;
        while (i < j) {
            while (j > i && resultArray[j] >= referenceNumber) j--;
            resultArray[i] = resultArray[j];

            while (i < j && resultArray[i] <= referenceNumber) i++;
            resultArray[j] = resultArray[i];
        }

        assert.equal(i, j);
        resultArray[i] = referenceNumber;
        
        sort(resultArray, left, j - 1);
        sort(resultArray, i + 1, right);
    }(array);


    return resultArray;
}

module.exports = quickSort;