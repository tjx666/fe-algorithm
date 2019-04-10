const assert = require('assert');
const directInsertSort = require('../../src/sort/directInsertSort');
const _ = require('lodash');

describe('#directInsertSort', () => {
    const testArray = [3, 2, 1, 3, 8, 5, 4, 2, 1, 6, 2, 666, -2, -9];
    it('#should be sorted', () => {
        assert(_.isEqual(directInsertSort(testArray), [-9, -2, 1, 1, 2, 2, 2, 4, 3, 5, 6, 3, 8, 666]));
    })
})