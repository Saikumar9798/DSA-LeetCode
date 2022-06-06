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
    let temp1 = headA, temp2 = headB, count1 = 0, count2 = 0;
    while(temp1){
        ++count1;
        temp1 = temp1.next;
    }
    while(temp2){
        ++count2;
        temp2 = temp2.next;
    }
    temp1 = headA, temp2 = headB;
    if(count2 > count1){
        while(count2 !== count1){
            --count2;
            temp2 = temp2.next;
        }
    }
    else{
        while(count2 !== count1){
            --count1;
            temp1 = temp1.next;
        }
    }
    while(temp1){
        if(temp1 === temp2) return temp1
        temp1 = temp1.next;
        temp2 = temp2.next;
    }
    return null
};