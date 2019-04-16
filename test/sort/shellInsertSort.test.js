const assert = require('assert');
const shellInsertSort = require('../../src/sort/shellInsertSort');
const _ = require('lodash');

describe('#shellInsertSort', function() {
    this.timeout(3000);
    const randomArray = Array.from({ length: 5E4 }, (ele, index) => _.random(-10000, 10000));

    it('#should randomArray be sorted', () => {
        assert.deepStrictEqual(shellInsertSort(randomArray), [...randomArray].sort((a, b) => a - b));
    })
})