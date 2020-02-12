/**
 *
 * @param {Node} linkList
 * @returns {void} head node of reversed linkList
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
