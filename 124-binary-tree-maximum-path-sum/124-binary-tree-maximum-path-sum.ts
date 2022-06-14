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

function maxPathSum(root: TreeNode | null): number {
    let max= -Infinity;
    function helper(root:TreeNode | null){
        if(!root) return 0;
        const left = helper(root.left);
        const right = helper(root.right);
        const returnValue = Math.max(Math.max(left,right)+root.val, root.val)
        max = Math.max( root.val+left+right, returnValue,max)
        return returnValue
    }
    helper(root);
    return max
};