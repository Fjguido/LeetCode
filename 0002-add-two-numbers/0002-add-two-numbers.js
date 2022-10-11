/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
    /* step() function recursively iterates through a ListNode linked list */
    const step = (l1, l2, carry=0) => {
        /* l1 or l2 can be null - double bang to cast to bool for null check */
        const sum = (!!l1 ? l1.val : 0) + (!!l2 ? l2.val : 0) + carry
        let listnode = new ListNode(sum)

        /* if either l1.next exists or l2.next exists */
        if ((!!l1 && !!l1.next) || (!!l2 && !!l2.next)) {
            listnode.next = step(
                !!l1 ? l1.next : null, 
                !!l2 ? l2.next : null, 
                sum > 9 ? 1 : 0
            )
        } else if (sum > 9) {
            /* final carry */
            listnode.next = new ListNode(1)
        }

        /* only keep LSD */
        listnode.val = parseInt(listnode.val.toString().slice(-1))
        return listnode
    }

    return step(l2, l1)
};