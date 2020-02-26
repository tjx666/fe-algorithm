import binarySearchInserting from './binarySearchInserting';

/**
 * 二分插入排序
 * 算法复杂度不好算啊，总之平均大于 O(n²)，空间复杂度 O(1)
 * 是不稳定，因为二分查找可能会让后面的相同的数插到前面
 * 举个最简单的例子, 1, 1, 1, 1，第四个 1 肯定插到前面去了
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
