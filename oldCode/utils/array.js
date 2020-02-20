/**
 * 向数组的指定位置插入一个元素
 * @param {Array} array
 * @param {number} position
 * @param {number} value
 */
const insert = (array, position, value) => {
    if (!Array.isArray(array)) throw new TypeError(`${array} 不是数组!`);

    if (position > array.length || position < -1) {
        throw new RangeError(`下标不合法! 下标应该在 [-1, ${array.length}], 而传入的下标为: ${position}`);
    }

    if (position === -1) {
        array.unshift(value);
    } else if (position === array.length) {
        array.push(value);
    } else {
        for (let index = array.length - 1; index >= position; index--) {
            array[index + 1] = array[index];
        }

        array[position] = value;
    }
};

if (require.main === module) {
    const testArray = [1, 2, 4, 5];
    insert(testArray, -1, 3);
    console.log(testArray);
} else {
    module.exports = {
        insert,
    };
}
