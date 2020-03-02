import BinaryTree from 'dataStructure/tree/binaryTree';

/**
 * 后序遍历递归写法
 */
export default function postOrderTravel<T>(tree: BinaryTree<T>): Array<T | undefined> {
    const { root } = tree;
    const nodes: Array<T | undefined> = [];

    if (root == null) {
        return nodes;
    }

    // 先遍历右子树
    if (root.right) {
        nodes.push(...postOrderTravel(new BinaryTree<T>(root.right)));
    }

    // 遍历自身
    nodes.push(root.value);

    // 遍历左子树
    if (root.left) {
        nodes.push(...postOrderTravel(new BinaryTree<T>(root.left)));
    }

    return nodes;
}
