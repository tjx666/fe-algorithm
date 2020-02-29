import assert = require('assert');
import parseQuery from '../../src/algorithm/parseQuery';

describe('#parseQuery', () => {
    it('should return the query object', () => {
        assert.deepStrictEqual(parseQuery('name=ly&age=22'), { name: 'ly', age: '22' });
    });
});
