const Node = require('./node');

class LinkList {
    constructor(equals) {
        this._equals = equals || ((a, b) => a === b);
        this._size = 0;
        this.head = undefined;
    }

    get size() {
        return this._size;
    }

    append(value) {
        const node = new Node(value);

        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }

        this._size++;
        return this;
    }

    getAt(index) {
        if (index >= 0 && index < this._size) {
            let current = this.head;
            for (let i = 0; i !== index; i++) {
                current = current.next;
            }

            return current;
        }

        return undefined;
    }

    insert(index, value) {
        if (index >= 0 && index <= this._size) {
            const node = new Node(value);
            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                const previous = this.getAt(index - 1);
                node.next = previous.next;
                previous.next = node;
            }
            this._size++;

            return true;
        }

        return false;
    }

    removeAt(index) {
        if (index >= 0 && index < this._size) {
            if (index === 0) {
                if (this.head != null) {
                    const { head } = this;
                    this.head = this.head.next;
                    return head;
                }
                return undefined;
            }

            const previous = this.getAt(index - 1);
            const current = this.getAt(index);
            previous.next = current.next;

            this._size--;
            return current.value;
        }
        return undefined;
    }

    indexOf(value) {
        let current = this.head;
        let index = 0;
        while (current != null && !this._equals(current.value, value)) {
            current = current.next;
            index++;
        }

        if (current != null) {
            return index;
        }

        return -1;
    }

    remove(value) {
        const index = this.indexOf(value);
        return this.removeAt(index);
    }

    isEmpty() {
        return this._size === 0;
    }

    clear() {
        this.head = undefined;
        this._size = 0;
    }

    toString() {
        let str = '';
        let current = this.head;
        while (current != null) {
            str = `${str}${current.value} -> `;
            current = current.next;
        }

        if (str) {
            str = str.slice(0, -4);
        }

        return str;
    }
}

module.exports = LinkList;
