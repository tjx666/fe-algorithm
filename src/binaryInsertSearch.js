const binaryInsertSearch = (array, value, startIndex = 0, endIndex = array.length - 1) => {
    if (!Array.isArray(array)) throw new TypeError(`${array} 不是数组!`);
    if (array.length === 0) return 0;
    if (array.length === 1) return value < array[0] ? 0 : 1;

    if (startIndex === endIndex) {
        if (value < array[startIndex]) {
            return startIndex;
        } else {
            let j = startIndex + 1
            for (; j < array.length; j++) {
                if (value < array[j]) return j;
            }

            if (j === array.length) {
                return array.length;
            }
        }
    } else if (startIndex > endIndex) {
        return startIndex;
    }

    const middleIndex = (startIndex + endIndex) / 2 | 0;

    if (value > array[middleIndex]) {
        startIndex = middleIndex + 1;
        return binaryInsertSearch(array, value, startIndex, endIndex);
    } else if (value < array[middleIndex]) {
        endIndex = middleIndex - 1;
        return binaryInsertSearch(array, value, startIndex, endIndex);
    } else if (value === array[middleIndex]) {
        let j = middleIndex + 1;
        for (; j < array.length; j++) {
            if (value < array[j]) return j;
        }

        if (j === array.length) {
            return array.length;
        }
    }
}


if (require.main === module) {
    const testArray = [1, 2, 4, 5];
    console.log(binaryInsertSearch(testArray, 8));
} else {
    module.exports = binaryInsertSearch;
}