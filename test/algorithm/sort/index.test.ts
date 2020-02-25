import assert = require('assert');
import selectSort from '../../../src/algorithm/sort/selectSort';
import insertSort from '../../../src/algorithm/sort/insertSort';

[selectSort, insertSort].forEach(sort => {
    describe(`#${sort.name}`, () => {
        it('should do nothing when array is empty or only one element', () => {
            let array: number[] = [];
            sort(array);
            assert.deepStrictEqual(array, []);

            array = [1];
            sort(array);
            assert.deepStrictEqual(array, [1]);
        });

        it('should the given array be sorted', () => {
            const array = [1, 5, 2, 8, -1, 6, 0, 2, 2, 3];
            sort(array);
            assert.deepStrictEqual(array, [-1, 0, 1, 2, 2, 2, 3, 5, 6, 8]);
        });
    });
});
