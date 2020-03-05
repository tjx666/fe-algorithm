import BinaryTree from 'dataStructure/tree/binaryTree';

/**
 * 输出每一层的右节点
 */
export default function rightChildPerLevel<T>(tree: BinaryTree<T>): Array<T | undefined> {
    const nodes: Array<T | undefined> = [];

    if (tree.root == null) {
        return nodes;
    }

    const queue = [tree.root];
    const levelsNodes: Array<Array<T | undefined>> = [];

    while (queue.length !== 0) {
        const levelNodes: Array<T | undefined> = [];
        const { length } = queue;
        for (let i = 0; i < length; i++) {
            const front = queue.shift()!;
            levelNodes.push(front.value);

            if (front.left != null) {
                queue.push(front.left);
            }

            if (front.right != null) {
                queue.push(front.right);
            }
        }
        levelsNodes.push(levelNodes);
    }

    for (let i = 0; i < levelsNodes.length; i++) {
        const lastIndex = levelsNodes[i].length - 1;
        nodes.push(levelsNodes[i][lastIndex]);
    }

    return nodes;
}
