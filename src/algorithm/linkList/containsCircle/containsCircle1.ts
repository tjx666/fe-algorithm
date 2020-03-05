import LinkList from 'dataStructure/linkList/linkList';
import Node from 'dataStructure/linkList/node';

/**
 * 判断链表是否有环
 * 思路一：使用 set 来保存已经遍历过节点，每次遍历到一个节点便判断已经遍历过的节点中是否包含当前节点
 * 算法复杂度肯定是低于 n²的
 */
export default function containsCircle(list: LinkList): boolean {
    if (list.head == null) {
        return false;
    }

    const traveledNodes = new Set<Node>([list.head]);
    let current = list.head;
    while (current.next != null) {
        current = current.next;
        if (traveledNodes.has(current)) {
            return true;
        }
        traveledNodes.add(current);
    }

    return false;
}
