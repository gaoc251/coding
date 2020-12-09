/**
 * 括号生成
 * https://leetcode-cn.com/problems/generate-parentheses/
 */
var generateParenthesis = function (n) {
    let result = [];

    function _generate (left, right, n, s) {
        // 递归条件
        if (left == n && right == n) {
            result.push(s)
            return;
        }
        // 处理当前逻辑

        // 下探到下一层
        if (left < n) {
            _generate(left + 1, right, n, s + '(');
        } 
        if (left > right) {
            _generate(left, right + 1, n, s + ')');
        }
    }
    _generate(0, 0, n, "");
    return result;
}
console.log("res", generateParenthesis(3))