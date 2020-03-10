import assert = require('assert');
import fibonacci1 from 'algorithm/fibonacci/fibonacci1';
import fibonacci2 from 'algorithm/fibonacci/fibonacci2';

[fibonacci1, fibonacci2].forEach((fibonacci, index) => {
    describe(`#fibonacci ${index === 0 ? 'recursive' : 'while loop'}`, () => {
        it('should return nth number in fibonacci sequence', () => {
            assert.strictEqual(fibonacci(1), 1);
            assert.strictEqual(fibonacci(2), 1);
            assert.strictEqual(fibonacci(3), 2);
            assert.strictEqual(fibonacci(4), 3);
            assert.strictEqual(fibonacci(5), 5);
        });
    });
});
