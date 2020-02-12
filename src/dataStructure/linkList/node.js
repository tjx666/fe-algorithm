module.exports = class Node {
    /**
     *
     * @param {any} value node value
     * @param {Node} next next node
     */
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
};
