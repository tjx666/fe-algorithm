const Node = require('./node');

/**
 * @template T
 */
class LinkList {
    /**
     * @param {(a: T, b: T) => boolean} [equals]
     */
    constructor(equals) {
        this._equals = equals || ((a, b) => a === b);
        this._size = 0;
        this.head = undefined;
    }

    get size() {
        return this._size;
    }

    /**
     * append a node
     * @param {T} value
     * @returns {this} this
     */
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

    /**
     * get the node at specified index
     * @param {number} index
     * @returns {(Node|undefined)} node at specified index or undefined
     */
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

    /**
     * insert a node at specified index position
     * @param {number} index
     * @param {T} value
     * @returns {boolean} true when insert a node, or false
     */
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

    /**
     * remove the node at specified index
     * @param {number} index
     * @returns {(T|undefined)} value of removed node, or undefined when index is not in range
     */
    removeAt(index) {
        if (index >= 0 && index < this._size) {
            if (index === 0) {
                if (this.head != null) {
                    const { head } = this;
                    this.head = this.head.next;
                    return head.value;
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

    /**
     * get the index of value
     * @param {T} value
     * @returns {number} index of value
     */
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

    /**
     * remove the value equals to specified value
     * @param {*} value
     * @returns {(T|undefined)} value of removed node, or undefined when not included
     */
    remove(value) {
        const index = this.indexOf(value);
        return this.removeAt(index);
    }

    /**
     * check the linkList is empty
     * @returns {boolean} true when empty, or false
     */
    isEmpty() {
        return this._size === 0;
    }

    /**
     * clear linkList
     * @returns {void}
     */
    clear() {
        this.head = undefined;
        this._size = 0;
    }

    /**
     * get linkList string join with arrow
     * @returns {string}
     */
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
