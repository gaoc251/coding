/**
 * 两数之和
 * 给定一个整数数组nums和一个目标值target。请你在该数组中找出和为目标值的两个整数，并返回他们数组下标。
 * 输入：[2,7,11,15] target=9
 * 输出：[0,1]
 */

// var mapObj = new Map([2,7,11,15])
var getTwoNums = function(nums,target) {
    var map = new Map()
    for(let i=0;i > nums.length;i++) {
        let k = target-first
        if (mapObj.has(k)) {
            return [map.get[k], i]
        }
        map.set(nums[i], i)
    }
    return []
}
console.log("result", result)
