import BinaryTree from 'dataStructure/tree/binaryTree';
import Node from 'dataStructure/tree/node';

/**
 * 先序遍历非递归写法
 * 知道了递归写法，转换成非递归写法时一般都是采用栈或者队列来保存回溯点
 * 因为递归过程本身就是一个回溯过程
 */
export default function preOrderTravel<T>(tree: BinaryTree<T>): Array<T | undefined> {
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
        nodes.push(current.value);

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
