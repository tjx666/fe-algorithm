import BinaryTree from 'dataStructure/tree/binaryTree';

/**
 * 获取二叉树叶子节点值数组-递归解法
 */
export default function getLeafRecursive<T = number>(tree: BinaryTree<T>): Array<T | undefined> {
    if (tree.root == null) {
        return [];
    }

    if (tree.root.left == null && tree.root.right == null) {
        return [tree.root.value];
    }

    return [
        ...getLeafRecursive(new BinaryTree(tree.root.left)),
        ...getLeafRecursive(new BinaryTree(tree.root.right)),
    ];
}
