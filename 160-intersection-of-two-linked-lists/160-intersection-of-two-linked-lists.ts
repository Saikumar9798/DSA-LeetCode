/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if(!headA || !headB) return null;
    let temp1 = headA;
    while(temp1){
        let temp2 = headB;
        while(temp2){
            if(temp2 === temp1) return temp1
            temp2 = temp2.next
        }
        temp1 = temp1.next
    }
    return null
};