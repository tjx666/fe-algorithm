const assert = require('assert');
const _ = require('lodash');
const binaryInsertSort = require('../../src/sort/binaryInsertSort');

describe('#binaryInsertSort', () => {
    const randomArray = Array.from({ length: 5E4 }, (ele, index) => _.random(-10000, 10000));

    it('#should randomArray be sorted', () => {
        assert.deepStrictEqual(binaryInsertSort(randomArray), [...randomArray].sort((a, b) => a - b));
    })
})