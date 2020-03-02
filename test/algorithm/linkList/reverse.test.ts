import assert = require('assert');
import LinkList from 'dataStructure/linkList/linkList';
import reverse from 'algorithm/linkList/reverse';

describe('#reverse', () => {
    it('should reverse linkList', () => {
        const list = new LinkList<string>();
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
