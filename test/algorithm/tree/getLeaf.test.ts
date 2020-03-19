import assert = require('assert');
import BinaryTree, { testTree } from 'dataStructure/tree/binaryTree';
import Node from 'dataStructure/tree/node';
import getLeafRecursive from 'algorithm/tree/leaf/getLeafRecursive';
import getLeafNotRecursive from 'algorithm/tree/leaf/getLeafNotRecursive';

[getLeafRecursive, getLeafNotRecursive].forEach(getLeaf => {
    describe(`#${getLeaf.name}`, () => {
        it('should return leaf nodes of binary tree', () => {
            const tree = new BinaryTree();
            assert.deepStrictEqual(getLeaf(tree), []);

            tree.root = new Node(1);
            assert.deepStrictEqual(getLeaf(tree), [1]);

            tree.root.left = new Node(2);
            assert.deepStrictEqual(getLeaf(tree), [2]);

            assert.deepStrictEqual(getLeaf(testTree), [4, 5, 6, 7]);
        });
    });
});
