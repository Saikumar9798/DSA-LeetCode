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

function isValidBST(root: TreeNode | null): boolean {
    const inOrderArray = getInorderRepresentationOfTree(root);
    return checkValidBST(inOrderArray)
};

function checkValidBST(inOrderArray=[]){
    for(let i= 0; i < inOrderArray.length-1; ++i){
        if(inOrderArray[i] >= inOrderArray[i+1]) return false;
    }
    return true;
}

function getInorderRepresentationOfTree(root: TreeNode | null, inOrderArray=[]):number[]{
    if(!root) return;
    getInorderRepresentationOfTree(root.left, inOrderArray);
    inOrderArray.push(root.val);    
    getInorderRepresentationOfTree(root.right, inOrderArray);
    return inOrderArray;
}