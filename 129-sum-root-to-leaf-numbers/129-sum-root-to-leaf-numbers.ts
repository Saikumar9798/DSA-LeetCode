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

function sumNumbers(root: TreeNode | null): number {
    const stack = [];
    let totalSum = 0;
    function helper(root: TreeNode | null){
        stack.push(root.val)
        if(root?.left) helper(root.left);
        if(root?.right) helper(root.right);
        if(!root.left && ! root.right) {
            const formedNumber = stack.join("")
            totalSum += +formedNumber
        }   
        stack.pop();
    }
    helper(root)
    return totalSum
};