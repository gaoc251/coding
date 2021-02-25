/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
示例 4：

输入：s = "([)]"
输出：false
示例 5：

输入：s = "{[]}"
输出：true
 */
var isValid = function(s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    let pairs = {
        ')':'(',
        ']': '[',
        '}': '{'
    }
    const stk = [];
    for (let i =0;i<s.length;i++) {
        let ch = s[i]
        if (pairs[ch]) {
            if (stk.length == 0 || stk[stk.length - 1] !== pairs[ch]) {
                return false;
            }
            stk.pop();
        } 
        else {
            stk.push(ch);
        }
    }
    return stk.length == 0;
};
console.log(isValid("([}}])"))
// console.log("res", isValid("()"))
// console.log("res", isValid("()[]{}"))
// console.log("res", isValid("(]"))
// console.log("res", isValid("([)]"))
// console.log("res", isValid("{[]}"))
