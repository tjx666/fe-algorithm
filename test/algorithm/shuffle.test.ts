import assert = require('assert');
import shuffle from '../../src/algorithm/shuffle';

describe('#shuffle', () => {
    it('should do nothing when element count less than 1', () => {
        const array: number[] = [];
        shuffle(array);
        assert.deepStrictEqual(array, []);

        array[0] = 1;
        shuffle(array);
        assert.deepStrictEqual(array, [1]);
    });

    it('should mess up the given array', () => {
        const array = [1, 2, 3];
        shuffle(array);
        assert.notStrictEqual(array, [1, 2, 3]);
    });
});
