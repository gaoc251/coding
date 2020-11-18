/**
 * 
 * @param {*} nums 
 * https://leetcode-cn.com/problems/matchsticks-to-square/solution/473-huo-chai-pin-zheng-fang-xing-dfshui-su-by-gall/
 */
var makesquare = function(nums) {
    if (nums.length == 0 || nums == null) return false;
    let sum = nums.reduce(function(a,b){return a+b})
    let chu = sum/4, count=0;
    if (chu % 4 !== 0) return false;

    for (let i = 0; i<nums.length; i++) {
        if (nums[i]==chu) {
            count++;
        }
    }
    return count > 2    
};

console.log("res", makesquare([1,1,2,2,2]))
console.log("res", makesquare([3,3,3,3,4]))
console.log("res", makesquare([5,5,5,5,4,4,4,4,3,3,3,3]))