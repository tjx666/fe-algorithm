const { Node, LinkList } = require('./linkList');

const testLinkList = new LinkList();
for (let i = 1; i <= 5; i++) {
    testLinkList.append(new Node(i));
}
testLinkList.show();

// 反转链表方式一
const reverseLinkList1 = linkList => {
    const reversedLinkList = new LinkList();
    let current = linkList.head;
    while (current) {
        const newNode = new Node(current.value);
        reversedLinkList.unshift(newNode);
        current = current.next;
    }
    return reversedLinkList;
};
const reversedLinkLint = reverseLinkList1(testLinkList);
reversedLinkLint.show();

const reverseLinkList2 = linkList => {
    if (linkList && !linkList.head) return linkList;

    let current = linkList.head;
    while (current) {
        const nextNode = current.next;
        if (current === linkList.head) {
            current.next = null;
        } else {
            current.next = linkList.head;
            linkList.head = current;
        }
        current = nextNode;
    }
};

reverseLinkList2(testLinkList);
testLinkList.show();
