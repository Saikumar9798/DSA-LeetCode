/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: Node | null): number[] {
    const outArray = [];
    function helper(root: Node | null){
        if(!root) return [];
        for(let child of root.children)
            helper(child)
        outArray.push(root.val);
    }
    helper(root);
    return outArray;
};