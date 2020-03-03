import LinkList from 'dataStructure/linkList/linkList';
import Node from 'dataStructure/linkList/node';

/**
 * 判断两条链表是否相交
 * 这个问题在 19 年春招被新浪的一个面试官问过
 * 如果两条链表相交，那么它们最后一个节点必然是相同的
 */
export default function isIntersect(list1: LinkList, list2: LinkList): boolean {
    if (list1.size === 0 || list2.size === 0) {
        return false;
    }

    let tail1: Node | undefined = list1.head!;
    while (tail1.next != null) {
        tail1 = tail1.next;
    }

    let tail2: Node | undefined = list2.head!;
    while (tail2.next != null) {
        tail2 = tail2.next;
    }

    if (tail1 === tail2) {
        return true;
    }

    return false;
}
