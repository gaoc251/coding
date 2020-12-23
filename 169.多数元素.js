/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let obj = {}, len = nums.length;
    let res = [];
    nums.forEach(item => {
        if (obj[item]){
            obj[item]++;
        } else {
            obj[item]= 1
        }
        if (res.indexOf(item)<0 && obj[item]>len/2) {
            res.push(item)
        }
    })
    return res
};
// @lc code=end

/**
 * 解法：
 * 1、暴力
 * 2、map 加权 ON
 * 3、sort
 */
