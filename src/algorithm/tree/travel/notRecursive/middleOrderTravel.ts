import BinaryTree from 'dataStructure/tree/binaryTree';
import Node from 'dataStructure/tree/node';

/**
 * 中序遍历非递归写法
 */
export default function postOrderTravel<T>(tree: BinaryTree<T>): Array<T | undefined> {
    const { root } = tree;
    const nodes: Array<T | undefined> = [];

    if (root == null) {
        return nodes;
    }

    const stack: Array<Node<T>> = [];
    let current: Node<T> | undefined = root;
    let top: Node<T> | undefined;

    while (current != null || stack.length !== 0) {
        if (current != null) {
            stack.push(current);
            current = current.left;
        } else {
            top = stack.pop()!;
            nodes.push(top.value);
            current = top.right;
        }
    }

    return nodes;
}
