import assert = require('assert');
import levelOrderTravel from 'algorithm/tree/travel/levelOrderTravel';
import BinaryTree, { testTree } from 'dataStructure/tree/binaryTree';

describe('#levelOrderTravel', () => {
    it('should return the nodes travel by level order', () => {
        const tree = new BinaryTree();
        assert.deepStrictEqual(levelOrderTravel(tree), []);

        const nodes = levelOrderTravel(testTree);
        assert.deepStrictEqual(nodes, [1, 2, 3, 4, 5, 6, 7]);
    });
});
