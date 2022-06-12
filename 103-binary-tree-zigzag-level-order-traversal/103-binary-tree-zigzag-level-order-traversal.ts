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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if(!root) return [];
    const outArray: number[][] = [];
    const queue: TreeNode[] | null = [root];
    let flag = 0;
    while(queue.length){
        const qLen = queue.length, temp: number[] = [];
        for(let i = 0; i < qLen; ++i){
            const node: TreeNode | null = queue.shift();
            temp.push(node.val)
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right)
        }
        if(flag%2) outArray.push(temp.reverse())
        else outArray.push(temp);
        ++flag;
    }
    return outArray;
};