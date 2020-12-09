/**
 *  爬楼梯
 * https://leetcode-cn.com/problems/climbing-stairs/
 */
var climbStairs = function(n) {
    let fn = []
    fn[1] = 1
    fn[2] = 2
    for(let i = 3; i <= n; i++) {
        fn[i] = fn[i-1]+fn[i-2]
    }
    return fn[n]
};