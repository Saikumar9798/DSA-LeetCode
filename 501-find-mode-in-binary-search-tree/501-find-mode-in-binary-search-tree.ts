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

function findMode(root: TreeNode | null): number[] {
    let currentNodeVal = null, 
        currentNodeCount = 0, 
        maxCount = -Infinity, 
        mode = [];
    
    const inOrder = root => {
        if(!root) return;
        
        inOrder(root.left);
        
        if(currentNodeVal === root.val){
            currentNodeCount++;
        } else {
            currentNodeCount = 1;
            currentNodeVal = root.val;
        }
        if(currentNodeCount > maxCount){
            maxCount = currentNodeCount;
            mode = [root.val];
        }
        else if(currentNodeCount === maxCount){
            mode.push(root.val)
        }

        inOrder(root.right);
    }
    inOrder(root)
   
    return mode;
};