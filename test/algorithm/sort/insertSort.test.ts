import assert = require('assert');
import insertSort from '../../../src/algorithm/sort/insertSort';

describe('#insertSort', () => {
    it('should the given array be sorted', () => {
        const array = [1, 5, 2, 8, -1, 6, 0, 2, 2, 3];
        insertSort(array);
        assert.deepStrictEqual(array, [-1, 0, 1, 2, 2, 2, 3, 5, 6, 8]);
    });
});
