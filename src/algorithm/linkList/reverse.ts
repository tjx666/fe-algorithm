import LinkList from 'dataStructure/linkList/linkList';

export default function reverse<T>(list: LinkList<T>): void {
    if (list.head == null) {
        return;
    }

    const { head } = list;
    let previous = head;
    let current = head.next;

    while (current != null) {
        const { next } = current;
        current.next = previous;
        previous = current;
        current = next;
    }

    head.next = undefined;
    list.head = previous;
}
