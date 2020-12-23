/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let prev = prices[0];
    let res = 0;
    prices.forEach((item, index) => {
        if (index > 0 && item > prev) {
            res = res + (item-prev)
        }
        prev = item;
    })
    return res;
};
// @lc code=end


// 解法
// 1、深度优先DFS 买一股卖一股  O 2的n次方
// 2、贪心 只要后一天比前一天高，就买入卖出  ON
// 3、动态规划 ON
