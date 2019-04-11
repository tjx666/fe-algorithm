const assert = require('assert');
const bubbleSort = require('../../src/sort/bubbleSort');
const _ = require('lodash');

describe('#bubbleSort', function() {
    this.timeout(10000);
    const randomArray = Array.from({ length: 5E4 }, (ele, index) => _.random(-10000, 10000));

    it('#should randomArray be sorted', () => {
        assert(_.isEqual(bubbleSort(randomArray), [...randomArray].sort((a, b) => a - b)));
    })
})