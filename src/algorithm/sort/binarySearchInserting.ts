/**
 * 二分查找插入位置
 */
export default function binarySearchInserting(
    array: number[],
    length: number,
    value: number,
): number {
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
