import assert = require('assert');
import levelOrderTravel from 'algorithm/tree/travel/levelOrderTravel';
import { testTree } from 'dataStructure/tree/binaryTree';

describe('#levelOrderTravel', () => {
    it('should return the nodes travel by level order', () => {
        const nodes = levelOrderTravel(testTree);
        assert.deepStrictEqual(nodes, [1, 2, 3, 4, 5, 6, 7]);
    });
});
