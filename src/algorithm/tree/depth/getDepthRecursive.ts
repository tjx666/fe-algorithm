import BinaryTree from 'dataStructure/tree/binaryTree';

/**
 * 获取二叉树的深度-递归解法
 */
export default function getDepthRecursive(tree: BinaryTree): number {
    return tree.root == null
        ? 0
        : 1 +
              Math.max(
                  getDepthRecursive(new BinaryTree(tree.root.left)),
                  getDepthRecursive(new BinaryTree(tree.root.right)),
              );
}
