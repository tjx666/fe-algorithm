const assert = require('assert');
const directInsertSort = require('../../src/sort/directInsertSort');
const _ = require('lodash');

describe('#directInsertSort', () => {
    const randomArray = Array.from({ length: 10000 }, (ele, index) => _.random(-10000, 10000));

    it('#should randomArray be sorted', () => {
        assert(_.isEqual(directInsertSort(randomArray), [...randomArray].sort((a, b) => a - b)));
    })
})