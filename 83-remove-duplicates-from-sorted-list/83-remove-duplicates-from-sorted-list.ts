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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let temp = head;
    while(temp){
        let node = temp;
        while(temp.next && temp.next.val === temp.val) temp = temp.next;
        node.next = temp.next;
        temp = temp.next
    }
    return head;
};