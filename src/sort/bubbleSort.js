const bubbleSor = (array) => {
    if (!Array.isArray(array)) throw new TypeError(`${array} 不是数组!`); 
    if (array.length <= 1) return [...array];

    const resultArray = [...array];
    let swapTime;
    for (let i = 0, iMax = resultArray.length - 1; i < iMax; i++) {
        if (swapTime === 0) break;

        swapTime = 0;
        for (let j = 0, jMax = iMax - i; j < jMax; j++) {
            if (resultArray[j + 1] < resultArray[j]) {
                [resultArray[j], resultArray[j + 1]] = [resultArray[j + 1], resultArray[j]];
                swapTime++;
            }
        }
    }
    return resultArray;
}


if (require.main === module) {
    console.log(bubbleSor([-706, -93, -228]))
} else {
    module.exports = bubbleSor;
}