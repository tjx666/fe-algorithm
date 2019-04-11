const simpleSelectSort = (array) => {
    if (!Array.isArray(array)) throw new TypeError(`${array} 不是数组!`); 

    const resultArray = [...array];
    for (let i = 0, iMax = array.length - 1; i < iMax; i++) {
        let minIndex = i;
        for (let j = i + 1, jMax = array.length; j < jMax; j++) {
            if (resultArray[j] < resultArray[minIndex]) minIndex = j;
        }

        if (minIndex !== i) [resultArray[i], resultArray[minIndex]] = [resultArray[minIndex], resultArray[i]];
    }

    return resultArray;
}

module.exports = simpleSelectSort;