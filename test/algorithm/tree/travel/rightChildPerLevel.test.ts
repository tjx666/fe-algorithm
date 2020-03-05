import assert = require('assert');
import rightChildPerLevel from 'algorithm/tree/travel/rightChildPerLevel';
import BinaryTree, { testTree } from 'dataStructure/tree/binaryTree';
import Node from 'dataStructure/tree/node';

describe('#rightChildPerLevel', () => {
    it('should return the right child per level', () => {
        const nodes = rightChildPerLevel(testTree);
        assert.deepStrictEqual(nodes, [1, 3, 7]);

        const testTree1 = new BinaryTree(1);
        testTree1.root!.left = new Node(2);
        testTree1.root!.left.left = new Node(4);
        testTree1.root!.left.right = new Node(5);
        /*
testTree1 的结构
        1
    2
4      5
*/
        const nodes1 = rightChildPerLevel(testTree1);
        assert.deepStrictEqual(nodes1, [1, 2, 5]);
    });
});
