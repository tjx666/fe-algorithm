/**
 * @template T
 */
class Node {
    /**
     *
     * @param {T} value value of node
     * @param {Node<T>} next point to next node
     */
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

module.exports = Node;
