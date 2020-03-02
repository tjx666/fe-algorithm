import assert = require('assert');
import addTwoList from 'algorithm/linkList/addTwoList';
import LinkList from 'src/dataStructure/linkList/linkList';

describe('#addTwoList', () => {
    it('should return the list which is addTwoList', () => {
        const list1 = new LinkList();
        list1
            .append(9)
            .append(2)
            .append(3);
        const list2 = new LinkList();
        list2
            .append(1)
            .append(2)
            .append(3);
        const list3 = addTwoList(list1, list2);
        assert.strictEqual(list3.toString(), '0 -> 5 -> 6');
    });
});
