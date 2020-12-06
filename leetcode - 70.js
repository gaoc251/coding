/**
 * 爬楼梯
 */

var climbStairs = function(n) {
    let fn = []
    fn[1] = 1
    fn[0] = 0
    for(let i = 2; i <= n; i++) {
        fn[i] = fn[i-1]+fn[i-2]
    }
    return fn[n]
};

console.log("res1", climbStairs(5))