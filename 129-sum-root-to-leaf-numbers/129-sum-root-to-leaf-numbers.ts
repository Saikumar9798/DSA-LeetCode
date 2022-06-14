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
    const finalArray = [];
    let totalSum = 0;
    function helper(root: TreeNode | null){
        if(!root?.left && !root?.right) {
            stack.push(root?.val)
            finalArray.push(stack.join(""))
            stack.pop();
            return;
        }
        stack.push(root.val)
        if(root?.left) helper(root.left);
        if(root?.right) helper(root.right);
        stack.pop();
    }
    helper(root)
    const sum = finalArray.reduce((acc,curr)=>acc+(+curr),0)
    return sum
};