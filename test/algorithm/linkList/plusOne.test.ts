import assert = require('assert');

import LinkList from '../../../src/dataStructure/linkList/linkList';
import plusOne from '../../../src/algorithm/linkList/plusOne';

describe('#plusOne', () => {
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
