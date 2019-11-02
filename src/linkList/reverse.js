const { Node, LinkList } = require('./LinkList');

const linkList = new LinkList();
for (let i = 1; i <= 5; i++) {
    linkList.append(new Node(i));
}
linkList.show();

// 反转链表方式一
const reverseLinkList1 = (linkList) => {
    const reversedLinkList = new LinkList();
    let current = linkList.head;
    while(current) {
        const newNode = new Node(current.value);
        reversedLinkList.unshift(newNode);
        current = current.next;
    }
    return reversedLinkList;
}
let reversedLinkLint = reverseLinkList1(linkList)
reversedLinkLint.show();

const reverseLinkList2 = (linkList) => {
    if (linkList && !linkList.head) return linkList;

    let current = linkList.head;
    while (current) {
        const nextNode = current.next;
        if (current == linkList.head) {
            current.next = null;
        } else {
            current.next = linkList.head;
            linkList.head = current;
        }
        current = nextNode;
    }
}

reverseLinkList2(linkList)
linkList.show();