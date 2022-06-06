/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function averageOfLevels(root: TreeNode | null): number[] {
    const avgArray: number[] = [];
    let queue = [];
    queue.push(root);
    let j = 0, sum = 0, qLen = 0;
    while(queue.length){
        sum = 0, qLen = queue.length;
        for(let i = 0; i < qLen; ++i){
            const node = queue.shift();
            sum += node.val;
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        avgArray[j] = sum / qLen;
        ++j;
    }
    return avgArray
};