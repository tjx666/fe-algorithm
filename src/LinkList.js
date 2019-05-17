class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    } 
}

class LinkList {
    constructor(head) {
        this.head = head;
    }

    show() {
        let linkListString = '';
        let current = this.head;
        while (current) {
            linkListString = `${linkListString}${current.value} -> `;
            current = current.next;
        }
        console.log(linkListString.slice(0, -3));
    }

    append(node) {
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;

            while(current.next !== null) current = current.next;
            current.next = node;
        }
    }

    unshift(node) {
        node.next = this.head;
        this.head = node;
    }
}

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