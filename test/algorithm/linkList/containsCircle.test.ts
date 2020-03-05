import assert = require('assert');

import LinkList from 'dataStructure/linkList/linkList';
import containsCircle1 from 'algorithm/linkList/containsCircle/containsCircle1';
import containsCircle2 from 'algorithm/linkList/containsCircle/containsCircle2';

[containsCircle1, containsCircle2].forEach((containsCircle, index) => {
    describe(`#containsCircle${index + 1}`, () => {
        it('should return whether the linkList contains circle', () => {
            const list = new LinkList();
            list.append(1)
                .append(3)
                .append(6)
                .append(7)
                .append(9);
            list.getAt(list.size - 1)!.next = list.getAt(2);
            assert.ok(containsCircle(list));
        });
    });
});
