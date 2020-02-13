/**
 * @template T
 */
class Node {
    /**
     * @param {T} value
     * @param {Node<T>} next
     */
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

module.exports = Node;
