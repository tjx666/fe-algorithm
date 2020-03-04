import Node from 'dataStructure/linkList/node';
import LinkList from 'dataStructure/linkList/linkList';

/**
 * 链表加一，从左到右由高位到低位
 * 其实遍历得时候如果当前值小于 9 直接加一即可
 * 但是如果当前值是 9，需要保留当前位置
 * 想到这应该就知道可以考虑使用双指针来做
 *
 * @example
 * ```
 * 1 -> 2 -> 3
 * 1 -> 2 -> 4
 *
 * 9 -> 9 -> 9
 * 0 -> 0 -> 0
 * ```
 */
export default function plusOne(list: LinkList): void {
    if (list.head == null) return;

    if (list.size === 1) {
        list.head.value = (list.head.value! + 1) % 10;
        return;
    }

    let previous = list.head;
    let fast = list.head.next;
    let slow: Node<number> | undefined;

    while (fast != null) {
        if (fast.value === 9) {
            if (slow == null) {
                slow = previous;
            }
        } else {
            slow = undefined;
        }

        previous = fast;
        fast = fast.next;
    }

    if (slow != null) {
        while (slow != null) {
            slow.value = (slow.value! + 1) % 10;
            slow = slow.next;
        }
    } else {
        previous.value!++;
    }
}
