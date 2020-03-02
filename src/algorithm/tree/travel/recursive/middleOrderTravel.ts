import BinaryTree from 'dataStructure/tree/binaryTree';

/**
 * 中序遍历递归方式
 */
export default function middleOrderTravel<T>(tree: BinaryTree<T>): Array<T | undefined> {
    const { root } = tree;
    const nodes: Array<T | undefined> = [];

    if (root == null) {
        return nodes;
    }

    // 先遍历左子树
    if (root.left) {
        nodes.push(...middleOrderTravel(new BinaryTree<T>(root.left)));
    }

    // 再遍历自身
    nodes.push(root.value);

    // 再遍历右子树
    if (root.right) {
        nodes.push(...middleOrderTravel(new BinaryTree<T>(root.right)));
    }

    return nodes;
}
