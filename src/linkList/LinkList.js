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

module.exports = {
    Node,
    LinkList
}
