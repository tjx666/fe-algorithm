/**
 * 插入排序
 */
export default function insertSort(array: number[]): void {
    const { length } = array;
    // 只需要插前 length -1 个数
    for (let i = 0; i < length - 1; i++) {
        let min = i;
        for (let j = i; j < length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        // 在当前位置插入找到的最小数
        if (min !== i) {
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
}
