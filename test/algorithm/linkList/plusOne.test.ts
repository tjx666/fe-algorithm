import assert = require('assert');

import LinkList from 'dataStructure/linkList/linkList';
import plusOne1 from 'algorithm/linkList/plusOne/plusOne1';
import plusOne2 from 'algorithm/linkList/plusOne/plusOne2';

[plusOne1, plusOne2].forEach((plusOne, index) => {
    describe(`#plusOne ${index === 0 ? 'not' : ''} recursive`, () => {
        it('should plus one when no elements or only one elements', () => {
            const list = new LinkList();
            plusOne(list);
            assert.strictEqual(list.toString(), '');

            list.append(9);
            plusOne(list);
            assert.strictEqual(list.toString(), '0');
        });

        it('should plus one when no carry', () => {
            const list = new LinkList();
            list.append(1)
                .append(2)
                .append(3);
            plusOne(list);
            assert.strictEqual(list.toString(), '1 -> 2 -> 4');
        });

        it('should plus one when exits carry', () => {
            const list = new LinkList();
            list.append(3)
                .append(9)
                .append(9);
            plusOne(list);
            assert.strictEqual(list.toString(), '4 -> 0 -> 0');
        });
    });
});
