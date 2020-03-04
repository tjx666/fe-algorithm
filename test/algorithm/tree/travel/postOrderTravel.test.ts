import assert = require('assert');
import postOrderTravel1 from 'algorithm/tree/travel/recursive/postOrderTravel';
import postOrderTravel2 from 'algorithm/tree/travel/notRecursive/postOrderTravel';
import { testTree } from 'dataStructure/tree/binaryTree';

[postOrderTravel1, postOrderTravel2].forEach((postOrderTravel, index) => {
    describe(`#postOrderTravel ${index === 0 ? 'recursive' : 'notRecursive'}`, () => {
        it('should return the nodes traveled by post order', () => {
            const nodes = postOrderTravel(testTree);
            assert.deepStrictEqual(nodes, [7, 3, 6, 1, 5, 2, 4]);
        });
    });
});
