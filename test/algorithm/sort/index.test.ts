import assert = require('assert');
import selectSort from 'algorithm/sort/selectSort';
import insertSort from 'algorithm/sort/insertSort';
import bubbleSort from 'algorithm/sort/bubbleSort';
import quickSort from 'algorithm/sort/quickSort';

[selectSort, insertSort, bubbleSort, quickSort].forEach(sort => {
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
            const array = [2, 1, 5];
            sort(array);
            assert.deepStrictEqual(array, [1, 2, 5]);
        });

        it('should the given array be sorted when contains equals values', () => {
            const array = [1, 5, 2, 8, -1, 6, 0, 2, 2, 3];
            sort(array);
            assert.deepStrictEqual(array, [-1, 0, 1, 2, 2, 2, 3, 5, 6, 8]);
        });
    });
});
