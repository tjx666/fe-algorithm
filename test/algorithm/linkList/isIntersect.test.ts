import assert = require('assert');

import LinkList from 'dataStructure/linkList/linkList';
import Node from 'dataStructure/linkList/node';
import isIntersect from 'algorithm/linkList/isIntersect';

describe('#isIntersect', () => {
    it('should adjust the two linkLists is intersecting', () => {
        const list1 = new LinkList();
        const list2 = new LinkList();
        assert.strictEqual(isIntersect(list1, list2), false);

        const node = new Node(7);

        list1.append(1).append(3);
        list2.append(2).append(4);
        assert.strictEqual(isIntersect(list1, list2), false);

        list1.getAt(1)!.next = node;
        list2.getAt(1)!.next = node;
        assert.ok(isIntersect(list1, list2));
    });
});
