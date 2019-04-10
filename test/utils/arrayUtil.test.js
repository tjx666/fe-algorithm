const assert = require('assert');
const ArrayUtil = require('../../src/utils/arrayUtil');
const _ = require('lodash');

describe('#ArrayUtil', () => {
    describe('#insert', () => {
        const { insert } = ArrayUtil;
        let testArray = [2, 4, 6, 8];

        afterEach(() => {
            testArray = [2, 4, 6, 8];
        })
        
        it('insert middle', () => {
            insert(testArray, 2, 5);
            assert(_.isEqual(testArray, [2, 4, 5, 6, 8]));
        })

        it('insert when index === 0', () => {
            insert(testArray, 0, 1);
            assert(_.isEqual(testArray, [1, 2, 4, 6, 8]));
        })

        it('insert when index === testArray.length - 1', () => {
            insert(testArray, testArray.length - 1, 7);
            assert(_.isEqual(testArray, [2, 4, 6, 7, 8]));
        })

        it('insert when index === -1', () => {
            insert(testArray, -1, 1)
            assert(_.isEqual(testArray, [1, 2, 4, 6, 8]));
        })

        it('insert when index === testArray.length', () => {
            insert(testArray, testArray.length, 9);
            assert(_.isEqual(testArray, [2, 4, 6, 8, 9]));
        })
    })
})