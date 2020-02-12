const assert = require('assert');
const LinkList = require('../../../src/dataStructure/linkList/linkList');
const reverse1 = require('../../../src/dataStructure/linkList/reverse/reverse1');

describe('#reverse', () => {
    it('should reverse linkList', () => {
        const list = new LinkList();
        reverse1(list);
        assert.strictEqual(list.head, undefined);

        list.append('a')
            .append('b')
            .append('c')
            .append('d');
        reverse1(list);
        reverse1(list);
        assert.strictEqual(list.head.value, 'a');
        assert.strictEqual(list.size, 4);
    });
});
