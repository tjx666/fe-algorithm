const assert = require('assert');
const _ = require('lodash');
const simpleSelectSort = require('../../src/sort/simpleSelectSort');

describe('#simpleSelectSort', () => {
    const randomArray = Array.from({ length: 5E4 }, (ele, index) => _.random(-10000, 10000));

    it('#should randomArray be sorted', () => {
        assert(_.isEqual(simpleSelectSort(randomArray), [...randomArray].sort((a, b) => a - b)));
    })
})