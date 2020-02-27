/**
 * 快速排序
 * 算法复杂度最好是 O(n)，也就是已经有序的情况，扫描一遍就完了
 * 最差的情况是 O(n²)， 也就是倒倒序的情况
 * 平均算法复杂度是 O(n*log₂n)
 */
export default function quickSort(array: number[]): void {
    (function sort(_array: number[], left: number, right: number): void {
        const length = right - left + 1;
        if (length <= 1) {
            return;
        }

        let i = left;
        let j = right;
        const ref = _array[i];

        while (i !== j) {
            while (_array[j] >= ref && j !== i) {
                j--;
            }

            array[i] = array[j];

            while (_array[i] <= ref && i !== j) {
                i++;
            }

            array[j] = array[i];
        }

        array[i] = ref;
        sort(_array, left, i - 1);
        sort(_array, j + 1, right);
    })(array, 0, array.length - 1);
}
