const assert = require('assert');
const directInsertSort = require('../../src/sort/directInsertSort');
const _ = require('lodash');

describe('#directInsertSort', function() {
    this.timeout(5000);
    const randomArray = Array.from({ length: 5E4 }, (ele, index) => _.random(-10000, 10000));

    it('#should randomArray be sorted', () => {
        assert(_.isEqual(directInsertSort(randomArray), [...randomArray].sort((a, b) => a - b)));
    })
})