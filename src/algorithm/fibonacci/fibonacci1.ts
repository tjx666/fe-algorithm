/**
 * 斐波那契数列递归解法
 * @param n 表示返回是数列中第 n 个
 */
export default function fibonacci(n: number): number {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
