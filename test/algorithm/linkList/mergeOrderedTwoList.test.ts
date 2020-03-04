import assert = require('assert');
import mergeOrderedTwoList from 'algorithm/linkList/mergeOrderedTwoList';
import LinkList from 'src/dataStructure/linkList/linkList';

describe('#addTwoList', () => {
    it('should return the list which is addTwoList', () => {
        const list1 = new LinkList();
        list1
            .append(1)
            .append(3)
            .append(3);
        const list2 = new LinkList();
        list2
            .append(1)
            .append(2)
            .append(5)
            .append(6)
            .append(6);
        const list3 = mergeOrderedTwoList(list1, list2);
        assert.strictEqual(list3.toString(), '1 -> 2 -> 3 -> 5 -> 6');
    });
});
