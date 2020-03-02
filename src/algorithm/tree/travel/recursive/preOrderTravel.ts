import BinaryTree from 'dataStructure/tree/binaryTree';

/**
 * 先序遍历
 * 递归方式思路还是很清晰
 * 把子节点当树的根节点递归即可
 */
export default function preOrderTravel<T>(tree: BinaryTree<T>): Array<T | undefined> {
    const { root } = tree;
    const nodes: Array<T | undefined> = [];

    if (root == null) {
        return nodes;
    }

    // 先序遍历先遍历自身
    nodes.push(root.value);

    // 再遍历左子树
    if (root.left) {
        nodes.push(...preOrderTravel(new BinaryTree<T>(root.left)));
    }

    // 再遍历右子树
    if (root.right) {
        nodes.push(...preOrderTravel(new BinaryTree<T>(root.right)));
    }

    return nodes;
}
