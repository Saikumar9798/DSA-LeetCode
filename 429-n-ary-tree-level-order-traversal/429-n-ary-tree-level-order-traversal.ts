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

function levelOrder(root: Node | null): number[][] {
    const outArray = [];
	if(!root) return [];
    const queue = [root];
    while(queue.length){
        const qLen = queue.length, temp = [];
        for(let i = 0; i < qLen; ++i){
            const node = queue.shift();
            temp.push(node.val);
            for(let child of node.children){
                queue.push(child)
            }
        }
        outArray.push(temp);
    }
    return outArray;
};