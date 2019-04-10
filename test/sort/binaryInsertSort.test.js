const assert = require('assert');
const binaryInsertSort = require('../../src/sort/binaryInsertSort');
const _ = require('lodash');

describe('#binaryInsertSort', () => {
    const testArray = [3, 2, 1, 3, 8, 5, 4, 2, 1, 6, 2, 666, -2, -9];
    const randomArray = Array.from({ length: 100 }, (ele, index) => _.random(-1000, 1000));

    it('#should testArray be sorted', () => {
        assert(_.isEqual(binaryInsertSort(testArray), [-9, -2, 1, 1, 2, 2, 2, 3, 3, 4, 5, 6, 8, 666]));
    })

    it('#should randomArray be sorted', () => {
        assert(_.isEqual(binaryInsertSort(randomArray), [...randomArray].sort((a, b) => a - b)));
    })
})