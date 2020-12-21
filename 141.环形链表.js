/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head||head.next==null) return false
    var low=head,fast=head;
    while(fast.next&&fast.next.next){
        fast=fast.next.next;
        low=low.next;
        if(low==fast) return true
    }
    return false
};
// @lc code=end

