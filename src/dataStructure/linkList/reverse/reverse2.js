const LinkList = require('../linkList');

/** @typedef {import('../linkList')} LinkList */

/**
 * @param {LinkList} linkList
 * @returns {void}
 */
function reverse(linkList) {
    if (linkList.head == null) return linkList;

    const { head } = linkList;
    let current = head;
    while (current != null) {
        const { next } = current;
        current.next = linkList.head;
        linkList.head = current;
        current = next;
    }
    head.next = undefined;
}

module.exports = reverse;
