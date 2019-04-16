const assert = require('assert');
const quickSort = require('../../src/sort/quickSort');
const _ = require('lodash');

describe('#quickSort', function() {
    this.timeout(3000);
    const randomArray = Array.from({ length: 5E4 }, (ele, index) => _.random(-10000, 10000));

    it('#should randomArray be sorted', () => {
        assert.deepStrictEqual(quickSort(randomArray), [...randomArray].sort((a, b) => a - b));
    })
})