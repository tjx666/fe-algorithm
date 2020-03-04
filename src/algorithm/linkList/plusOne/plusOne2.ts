import Node from 'dataStructure/linkList/node';
import LinkList from 'dataStructure/linkList/linkList';

/**
 * 链表加一递归解法
 * 递归关系：链表加一等价于当前节点的 next 构成的链表加一，再处理当前节点的值
 */
export default function plusOne(list: LinkList): void {
    if (list.head == null) {
        return;
    }

    // 返回值表示是否需要进位
    function plusOneTemp(current: Node): number {
        const carry = current.next == null ? 1 : plusOneTemp(current.next);
        const temp = current.value! + carry;
        current.value = temp % 10;
        return temp >= 10 ? 1 : 0;
    }

    plusOneTemp(list.head);
}
