/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// var myPow = function(x, n) {
//     if (n == 0) return 1;
//     if (n < 0) {
//         return 1/myPow(x, -n)
//     }
//     // 奇数
//     if (n%2) {
//         return x * myPow(x, n-1);
//     } else {
//         return myPow(x*x, n/2)
//     }
// };

var myPow = function(x,n) {
    if (n<0){
        x = 1/x;
        n= -n
    }
    let pow = 1
    while (n>0) {
        if (n%2) {
            pow = pow*x
            n = n-1
        } else {
            x= x*x
            n= n/2
        }
    }
    return pow
}
// @lc code=end

/**
 * 解法：
 * 1、库函数 O1
 * 2、暴力 ON
 * 3、分治（偶数，奇数）O logn
 * (递归，非递归)
 */