import binarySearchInserting from './binarySearchInserting';

/**
 * 插入排序
 * @param array 待排序的数组
 */
export default function insertSort(array: number[]): void {
    const { length } = array;

    // 元素个数小于 2 就不用排了
    if (length <= 1) {
        return;
    }

    for (let i = 1; i < length; i++) {
        const current = array[i];
        const insertPosition = binarySearchInserting(array, i, array[i]);
        for (let j = i; j > insertPosition; j--) {
            array[j] = array[j - 1];
        }
        array[insertPosition] = current;
    }
}
