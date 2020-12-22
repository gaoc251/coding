/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let parent_map = {')':'(','}':'{',']':'['};
    for(let i=0;i<s.length;i++) {
        let item = s[i]
        if (!parent_map[item]) {
            stack.push(item)
        } else if (parent_map[item] === stack[stack.length-1]) {
            stack.pop()
        } else {
            return false;
        }
    }
    return stack.length == 0
};
// @lc code=end

