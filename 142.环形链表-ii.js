/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head == null || head.next == null) return null;
    let fast = head;
    let low = head;
    while (fast.next && fast.next.next ) {
        let temp = fast
        fast = fast.next.next;
        low = low.next;
        if (fast == low) return temp;
    }
    return null;
};
// @lc code=end

