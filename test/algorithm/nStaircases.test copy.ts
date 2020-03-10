import assert from 'assert';
import nStaircases from 'algorithm/nStaircases';

describe('#nStaircases', () => {
    it('should return the right way count', () => {
        assert.strictEqual(nStaircases(1), 1);
        assert.strictEqual(nStaircases(2), 2);
        assert.strictEqual(nStaircases(3), 3);
    });
});
