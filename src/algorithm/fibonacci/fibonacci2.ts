/**
 * 斐波那契数列非递归解法
 * @param n 表示返回是数列中第 n 个
 */
export default function fibonacci(n: number): number {
    if (n === 1 || n === 2) {
        return 1;
    }

    const tempArray = [1, 1];
    let i = 3;
    for (; i <= n; i++) {
        tempArray[i - 1] = tempArray[i - 2] + tempArray[i - 3];
    }

    return tempArray[i - 2];
}
