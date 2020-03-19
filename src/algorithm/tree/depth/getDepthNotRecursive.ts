import BinaryTree from 'dataStructure/tree/binaryTree';
import Node from 'dataStructure/tree/node';

/**
 * 获取二叉树的深度-递归解法
 */
export default function getDepthNotRecursive(tree: BinaryTree): number {
    if (tree.root == null) {
        return 0;
    }

    const queue: Node[] = [tree.root];
    let depth = 0;
    while (queue.length !== 0) {
        depth++;
        for (let i = 0, len = queue.length; i < len; i++) {
            const front = queue.shift()!;
            if (front.left != null) {
                queue.push(front.left);
            }

            if (front.right != null) {
                queue.push(front.right);
            }
        }
    }

    return depth;
}
