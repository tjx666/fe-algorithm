const shellInsertSort = (array) => {
    const result = [...array];
    const length = array.length;

    let distance = length / 2 | 0;
    while (distance >= 1) {
        for (let i = distance; i < length; i++) {
            const sortedElement = result[i];
            let j = i - distance;
            while (j >= 0 && sortedElement < result[j]) {
                result[j + distance] = result[j];
                j -= distance;
            }
            result[j + distance] = sortedElement;
        }

        distance = distance / 2 | 0;
    }

    return result;
}

module.exports = shellInsertSort;