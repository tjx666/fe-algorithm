const Node = require('./node');

/** @typedef {import('./node')} Node */

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
        /** @type Node */
        this.head = undefined;
    }

    /**
     * @readonly
     * @memberof LinkList
     * @returns number
     */
    get size() {
        return this._size;
    }

    /**
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
     * @param {number} index
     * @returns {Node} node or undefined
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
     * @param {number} index
     * @param {T} value
     * @returns {boolean}
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
     * @param {number} index
     * @returns {T} node value or undefined
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
     * @param {T} value
     * @returns {number} index of value, or -1 when not found
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
     * @param {*} value
     * @returns {T} value of removed node, or undefined when not included
     */
    remove(value) {
        const index = this.indexOf(value);
        return this.removeAt(index);
    }

    /**
     * @returns {boolean}
     */
    isEmpty() {
        return this._size === 0;
    }

    /**
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
