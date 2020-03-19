import assert from 'assert';
import BinaryTree from 'dataStructure/tree/binaryTree';
import Node from 'dataStructure/tree/node';
import getDepthRecursive from 'algorithm/tree/depth/getDepthRecursive';
import getDepthNotRecursive from 'algorithm/tree/depth/getDepthNotRecursive';

[getDepthRecursive, getDepthNotRecursive].forEach(getDepth => {
    describe(`#${getDepth.name}`, () => {
        it('should return the binary tree depth', () => {
            const tree = new BinaryTree();
            assert.strictEqual(getDepth(tree), 0);

            tree.root = new Node(1);
            tree.root.left = new Node(2);
            tree.root.right = new Node(3);
            tree.root.left.right = new Node(5);
            tree.root.right.left = new Node(6);
            tree.root.right.right = new Node(7);
            tree.root.right.right.right = new Node(8);
            assert.strictEqual(getDepth(tree), 4);
        });
    });
});
