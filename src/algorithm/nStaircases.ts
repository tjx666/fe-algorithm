/**
 * n 阶楼梯问题
 *
 * 描述：有一个 n 阶的楼梯，每次只能走一步或者两步，最后一步刚好上去，问总共有多少总解法？
 *
 * 思路：最后上楼梯的时候要么是走一阶上的，要么是走两阶上的，因此递归关系就是：
 * nStaircases(n) = nStaircases(n - 1) + nStaircases(n - 2)
 *
 * @param n 楼梯阶数
 */
export default function nStaircases(n: number): number {
    // 递归出口
    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    return nStaircases(n - 1) + nStaircases(n - 2);
}
