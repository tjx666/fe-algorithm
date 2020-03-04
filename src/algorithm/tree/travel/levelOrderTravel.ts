import BinaryTree from 'dataStructure/tree/binaryTree';
import Node from 'dataStructure/tree/node';

export default function levelOrderTravel<T>(tree: BinaryTree<T>): Array<T | undefined> {
    const nodes: Array<T | undefined> = [];

    if (tree.root == null) {
        return nodes;
    }

    const queue = [tree.root];
    let top: Node<T> | undefined;

    while (queue.length !== 0) {
        top = queue.shift()!;
        nodes.push(top.value);

        if (top.left) {
            queue.push(top.left);
        }

        if (top.right) {
            queue.push(top.right);
        }
    }

    return nodes;
}
