/**
 * 直接选择排序
 * 时间复杂度 O(n²)，空间复杂度 O(1)
 * 最好最坏都是 O(n²)，因为不管怎样都要循环到最后
 * 是不稳定的，例如：8, 4, 3, 2, 8, 1，第一次交换就把前面的 8 交换到后面的 8 后面了
 */
export default function selectSort(array: number[]): void {
    const { length } = array;
    // 只需要排前 length -1 个数
    for (let i = 0; i < length - 1; i++) {
        let min = i;
        for (let j = i; j < length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        // 和最小的数交换
        if (min !== i) {
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
}
