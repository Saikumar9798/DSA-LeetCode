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

function findTarget(root: TreeNode | null, k: number): boolean {
    const visitedNodes:{[key:string]:1} = {};
    function helper(root: TreeNode | null){
        if(!root) return false;
        if((k - root.val) in visitedNodes) return true;
        else visitedNodes[root.val] = 1;
        return helper(root.left) || helper(root.right);
    }
    return helper(root)
};