import LinkList from 'dataStructure/linkList/linkList';

/**
 * 9 -> 1 -> 2
 * 1 -> 2 -> 3
 * =>
 * 0 -> 4 -> 5
 */
export default function addTwoList(list1: LinkList, list2: LinkList): LinkList {
    const list3 = new LinkList();
    let carry = 0;
    let current1 = list1.head;
    let current2 = list2.head;

    while (current1 != null || current2 != null) {
        const sum = (current1?.value || 0) + (current2?.value || 0) + carry;
        carry = sum >= 10 ? 1 : 0;
        list3.append(sum % 10);
        current1 = current1?.next;
        current2 = current2?.next;
    }

    return list3;
}
