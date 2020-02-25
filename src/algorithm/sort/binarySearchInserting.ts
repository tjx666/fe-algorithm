export default /**
 * 二分查找插入位置
 * @param array 待搜索的已排序的数组
 * @param length 查询的范围
 * @param value 要插入的值
 * @returns 插入的位置
 */
function binarySearchInserting(array: number[], length: number, value: number): number {
    if (length === 0) {
        return 0;
    }

    if (length === 1) {
        return value >= array[0] ? 1 : 0;
    }

    // min 和 max 分别表示可能是和要插入的数相等的数的，最小和最大坐标
    let min = 0;
    let max = length - 1;
    while (min < max) {
        const middle = ((min + max) / 2) | 0;

        if (value === array[middle]) {
            return middle + 1;
        }

        if (value > array[middle]) {
            min = middle + 1;
        } else if (value < array[middle]) {
            max = middle - 1;
        }
    }

    return value > array[min] ? min + 1 : min;
}
