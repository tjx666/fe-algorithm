const assert = require('assert');
const LinkList = require('../../../src/dataStructure/linkList/linkList');
const reverse1 = require('../../../src/dataStructure/linkList/reverse/reverse1');
const reverse2 = require('../../../src/dataStructure/linkList/reverse/reverse2');

describe('#reverse', () => {
    [reverse1, reverse2].forEach((reverse, index) => {
        describe(`#reverse${index + 1}`, () => {
            it('should reverse linkList', () => {
                const list = new LinkList();
                reverse(list);
                assert.strictEqual(list.head, undefined);

                list.append('a')
                    .append('b')
                    .append('c')
                    .append('d');
                reverse(list);
                assert.strictEqual(list.toString(), 'd -> c -> b -> a');
                reverse(list);
                assert.strictEqual(list.toString(), 'a -> b -> c -> d');
            });
        });
    });
});
