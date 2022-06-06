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

function averageOfLevels(root: TreeNode | null): number[] {
    const avgArray: number[] = [];
    let queue = [];
    queue.push(root);
    let j = 0, sum = 0;
    while(queue.length){
        sum = 0
        for(let i = 0; i < queue.length; ++i){
            sum += queue[i].val
        }
        avgArray[j] = sum / queue.length;
        ++j;
        const stack = [];
        for(let i = 0; i < queue.length; ++i){
            if(queue[i].left) stack.push(queue[i].left)
            if(queue[i].right) stack.push(queue[i].right)
        }
        queue = JSON.parse(JSON.stringify(stack))
    }
    return avgArray
};