import LinkList from 'dataStructure/linkList/linkList';
import Node from 'dataStructure/linkList/node';

/**
 * 合并两个有序链表并去重，返回合并后的链表
 */
export default function mergeOrderedTwoList<T>(
    list1: LinkList<T>,
    list2: LinkList<T>,
): LinkList<T> {
    let tail: Node<T> | undefined = new Node<T>();
    const list = new LinkList<T>();
    list.head = tail;

    let current1 = list1.head;
    let current2 = list2.head;

    // 每次取当前两个下标所在元素小的那个插到新的链表
    while (current1 != null && current2 != null) {
        let currentMin: Node<T> | undefined;
        if (current1.value! <= current2.value!) {
            currentMin = current1;
            current1 = current1.next;
        } else {
            currentMin = current2;
            current2 = current2.next;
        }

        // 判断是否是重复元素
        if (currentMin.value !== tail.value) {
            tail.next = currentMin;
            tail = tail.next;
        }
    }

    // 剩下部分也要去重
    let current3 = current1 != null ? current1 : current2;
    while (current3 != null) {
        if (current3.value !== tail.value) {
            tail.next = current3;
            tail = tail.next;
        }
        current3 = current3.next;
    }

    tail.next = undefined;
    list.head = list.head.next;

    return list;
}
