import assert = require('assert');
import versionCompare from '../../src/algorithm/versionCompare';

describe('#versionCompare', () => {
    it('should return the max version', () => {
        assert.strictEqual(versionCompare('2.8.8.8', '2.7.8.8'), '2.8.8.8');
        assert.strictEqual(versionCompare('2.8.8.8', '2.8'), '2.8.8.8');
        assert.strictEqual(versionCompare('2.8.8.8', '2.1'), '2.8.8.8');
    });
});
