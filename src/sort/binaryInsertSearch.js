const binaryInsertSearch = (array, value, startIndex = 0, endIndex = array.length - 1) => {
    if (!Array.isArray(array)) throw new TypeError(`${array} 不是数组!`);
    if (startIndex > endIndex) return value >= array[startIndex] ? startIndex + 1 : startIndex;

    const middleIndex = (startIndex + endIndex) / 2 | 0;
    if (value < array[middleIndex]) {
        endIndex = middleIndex - 1;
    } else {
        startIndex = middleIndex + 1;
    }

    return binaryInsertSearch(array, value, startIndex, endIndex);
}


if (require.main === module) {
    const testArray = [1, 2, 4, 5];
    console.log(binaryInsertSearch(testArray, 8));
} else {
    module.exports = binaryInsertSearch;
}