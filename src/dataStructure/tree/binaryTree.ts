import Node from './node';

export default class BinaryTree<T = number> {
    public root: Node<T> | undefined;

    constructor(value?: T | Node<T>) {
        if (value instanceof Node) {
            this.root = value;
        } else if (value !== undefined) {
            this.root = new Node<T>(value);
        }
    }
}

/*
测试用的二叉树
             1
       2           3
    4     5     6      7
 */

const testTree = new BinaryTree();
testTree.root = new Node(1);
testTree.root.left = new Node(2);
testTree.root.right = new Node(3);
testTree.root.left.left = new Node(4);
testTree.root.left.right = new Node(5);
testTree.root.right.left = new Node(6);
testTree.root.right.right = new Node(7);

export { testTree };
