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

function preorder(root: Node | null): number[] {
    const outArray = [];
    function helper(root: Node | null){
        if(!root) return [];
        outArray.push(root.val);
        for(let child of root.children)
            helper(child)
    }
    helper(root);
    return outArray;
}
