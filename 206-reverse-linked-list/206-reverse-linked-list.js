/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // Step 1
  let previous = null
  let current = head
  let following = head
// Step 2
  while(current !== null) {
    following = following.next
    current.next = previous
    previous = current          
    current = following
  }
// Step 3  
  return previous
};