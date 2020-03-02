import assert = require('assert');
import preOrderTravel1 from 'algorithm/tree/travel/recursive/preOrderTravel';
import preOrderTravel2 from 'algorithm/tree/travel/notRecursive/preOrderTravel';
import { testTree } from 'dataStructure/tree/binaryTree';

[preOrderTravel1, preOrderTravel2].forEach((preOrderTravel, index) => {
    describe(`#preOrderTravel ${index === 0 ? 'recursive' : 'notRecursive'}`, () => {
        it('should return the nodes travel by preOrder', () => {
            const nodes = preOrderTravel(testTree);
            assert.deepStrictEqual(nodes, [1, 2, 4, 5, 3, 6, 7]);
        });
    });
});
