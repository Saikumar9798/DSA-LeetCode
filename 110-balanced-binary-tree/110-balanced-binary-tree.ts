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

function isBalanced(root: TreeNode | null): boolean {
    function helper(root: TreeNode | null){
        if(!root) return 0;
        const left = helper(root.left);
        const right = helper(root.right);
        const heightDifference = Math.abs(left-right);
        if(heightDifference > 1) return Infinity;
        return 1+Math.max(left,right)
    }
    return helper(root) === Infinity ? false : true;
};