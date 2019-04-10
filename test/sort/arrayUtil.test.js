const assert = require('assert');
const ArrayUtil = require('../../src/sort/arrayUtil');
const _ = require('lodash');

describe('#arrayUtil', () => {
    describe('#class ArrayUtil', () => {
        describe('#insert', () => {
            const { insert } = ArrayUtil;
            const testArray = [3, 4, 6, 7];
            it('insert middle should return [3, 4, 5, 6, 7]', () => {
                assert(_.isEqual(insert(testArray, 2, 5)));
            })
        })
    })
})