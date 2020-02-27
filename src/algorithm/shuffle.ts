/**
 * 洗牌算法
 * 参考：[Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle)
 * 简单来说，就是遍历每个元素，将当前元素与当前下标到最后一个小标之间随机一个小标所在的元素之间进行交换
 */
export default function(array: number[]): void {
    const { length } = array;

    if (length <= 1) {
        return;
    }

    for (let index = 0; index < length - 1; index++) {
        const rand = (Math.random() * (length - index)) | 0;
        [array[index], array[rand]] = [array[rand], array[index]];
    }
}
