import BinaryTree from 'dataStructure/tree/binaryTree';
import Node from 'dataStructure/tree/node';

function isLeafNode<T>(node: Node<T>): boolean {
    return node.left == null && node.right == null;
}

/**
 * 获取二叉树叶子节点值数组-非递归解法
 * 使用非递归版的先序遍历时判断一下当前节点是不是叶子节点
 */
export default function getLeafNotRecursive<T = number>(tree: BinaryTree<T>): Array<T | undefined> {
    const { root } = tree;
    const nodes: Array<T | undefined> = [];

    if (root == null) {
        return nodes;
    }

    const stack: Array<Node<T>> = [];
    let current: Node<T> | undefined = root;

    while (current != null || stack.length !== 0) {
        if (current == null) {
            current = stack.pop()!;
        }

        if (isLeafNode<T>(current)) {
            nodes.push(current.value);
        }

        if (current.right != null) {
            stack.push(current.right);
        }

        if (current.left) {
            current = current.left;
        } else {
            current = stack.pop();
        }
    }

    return nodes;
}
