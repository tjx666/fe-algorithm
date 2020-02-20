/** @typedef {import('../linkList')} LinkList */

/**
 * @typedef {import('../linkList')} LinkList
 * @param {LinkList} linkList
 * @returns {void}
 */
function reverse(linkList) {
    if (linkList.head == null) return;

    let previous = linkList.head;
    let current = linkList.head.next;
    while (current != null) {
        const { next } = current;
        current.next = previous;
        previous = current;
        current = next;
    }
    linkList.head.next = undefined;
    linkList.head = previous;
}

module.exports = reverse;
