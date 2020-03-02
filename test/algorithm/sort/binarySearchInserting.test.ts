import assert = require('assert');
import binarySearchInserting from 'algorithm/sort/binarySearchInserting';

describe('#binarySearchInserting', () => {
    it('should return 0 when array is empty', () => {
        assert.strictEqual(binarySearchInserting([], 0, 6), 0);
    });

    it('should return the inserting position when only one element', () => {
        assert.strictEqual(binarySearchInserting([2], 1, 6), 1);
        assert.strictEqual(binarySearchInserting([2], 1, 1), 0);
    });

    it('should return the inserting position', () => {
        const array = [1, 2, 4, 4, 6, 7];
        assert.strictEqual(binarySearchInserting(array, 6, 3), 2);
        assert.strictEqual(binarySearchInserting(array, 6, 4), 3);
    });
});
