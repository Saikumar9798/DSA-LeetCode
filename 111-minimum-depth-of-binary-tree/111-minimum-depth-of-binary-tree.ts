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

function minDepth(root: TreeNode | null): number {
    if(!root) return 0;
    let q = [root], minDepth = 0;
    while(q.length){
        const qLen = q.length;
        for(let i = 0; i < qLen; ++i){
            if(!i) ++minDepth;
            const node = q.shift();
            if(!node.left && !node.right) return minDepth;
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }
    }
    return minDepth;
};