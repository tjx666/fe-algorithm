/**
 * 选择排序
 * @param array 待排序的数组
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
