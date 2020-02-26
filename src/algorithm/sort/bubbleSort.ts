/**
 * 冒泡排序
 * 算法复杂度最好的情况是 O(n)，也就是已经有序的情况下
 * 最差的情况是 O(n²)，也就是倒序的情况下
 * 平均时间复杂度为 O(n²)
 * 空间复杂度为 O(0)
 * 冒泡排序是一种稳定的排序算法
 */
export default function bubbleSort(array: number[]): void {
    const { length } = array;
    for (let i = 0; i < length - 1; i++) {
        let swapTimes = 0;

        for (let j = 0; j < length - i - 1; j++) {
            if (array[j + 1] < array[j]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapTimes++;
            }
        }

        if (swapTimes === 0) {
            return;
        }
    }
}
