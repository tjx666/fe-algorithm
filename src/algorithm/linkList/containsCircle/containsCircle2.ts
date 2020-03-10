import LinkList from 'dataStructure/linkList/linkList';
import Node from 'dataStructure/linkList/node';

/**
 * 判断链表是否有环
 * 思路一：使用快慢两个指针，如果有闭环，快指针肯定最后能追上慢指针
 */
export default function containsCircle(list: LinkList): boolean {
    if (list.head == null || list.head.next == null) {
        return false;
    }

    let slow: Node | undefined = list.head;
    let fast = list.head.next;

    while (fast.next != null && fast.next.next != null) {
        slow = slow!.next;
        fast = fast.next.next;
        if (fast === slow) {
            return true;
        }
    }

    return false;
}
