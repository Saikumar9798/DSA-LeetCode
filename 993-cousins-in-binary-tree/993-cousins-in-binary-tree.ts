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

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    let isSameParent = false;
    const queue: TreeNode[] | null = [root];
    while(queue.length){
        const qLen = queue.length, temp: number[] = [];
        for(let i = 0; i < qLen; ++i){
            const node: TreeNode | null = queue.shift();
            temp.push(node.val);
            if((node?.left?.val === x || node?.left?.val === y) && (node?.right?.val === x || node?.right?.val === y)) isSameParent = true
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        if(temp.includes(x) && temp.includes(y) && !isSameParent) return true;
    }
    return false;
};