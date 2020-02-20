import assert = require('assert');
import plus from '../src/plus';

describe('#plus', () => {
    it('should return a plus b', () => {
        assert.equal(plus(1, 1), 2);
    });
});
