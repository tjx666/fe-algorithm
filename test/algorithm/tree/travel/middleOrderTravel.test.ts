import assert = require('assert');
import middleOrderTravel1 from 'algorithm/tree/travel/recursive/middleOrderTravel';
import middleOrderTravel2 from 'algorithm/tree/travel/notRecursive/middleOrderTravel';
import { testTree } from 'dataStructure/tree/binaryTree';

[middleOrderTravel1, middleOrderTravel2].forEach((middleOrderTravel, index) => {
    describe(`#middleOrderTravel ${index === 0 ? 'recursive' : 'notRecursive'}`, () => {
        it('should return the nodes traveled by middle order', () => {
            const nodes = middleOrderTravel(testTree);
            assert.deepStrictEqual(nodes, [4, 2, 5, 1, 6, 3, 7]);
        });
    });
});
