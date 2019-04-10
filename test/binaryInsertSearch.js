const assert = require('assert');
const binaryInsertSearch = require('../src/binaryInsertSearch');
const _ = require('lodash');


describe('#binaryInsertSearch', () => {
    const testArray = [1, 2, 5];
    
    it('#should binaryInsertSearch([1, 2, 5], 0) return 0', () => {
        assert.equal(binaryInsertSearch(testArray, 0), 0);
    })

    it('#should binaryInsertSearch([1, 2, 5], 1) return 1', () => {
        assert.equal(binaryInsertSearch(testArray, 1), 1);
    })

    it('#should binaryInsertSearch([1, 2, 5], 3) return 2', () => {
        assert.equal(binaryInsertSearch(testArray, 3), 2);
    })

    it('#should binaryInsertSearch([1, 2, 5], 6) return 0', () => {
        assert.equal(binaryInsertSearch(testArray, 6), 3);
    })

    it('#should binaryInsertSearch([], 6) return 0', () => {
        assert.equal(binaryInsertSearch([], 6), 0);
    })

    it('#should binaryInsertSearch([3], 5) return 1', () => {
        assert.equal(binaryInsertSearch([3], 5), 1);
    })

    it('#should binaryInsertSearch([3], 3) return 1', () => {
        assert.equal(binaryInsertSearch([3], 3), 1);
    })

    it('#should binaryInsertSearch([4, 4, 4, 4], 4) return 4', () => {
        assert.equal(binaryInsertSearch([4, 4, 4, 4], 4), 2);
    })

    it('#should binaryInsertSearch([4, 4, 4, 4, 4], 4) return 5', () => {
        assert.equal(binaryInsertSearch([4, 4, 4, 4, 4], 4), 3);
    })
})