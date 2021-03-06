/**
 * 盛最多水的容器
 * https://leetcode-cn.com/problems/container-with-most-water/
 */
var maxArea = function (height) {
    var i = 0, j = height.length - 1, max = 0
    while (i < j) {
        max = Math.max(
            max, 
            (j - i) * (
                height[i] > height[j] ? 
                height[j--]: height[i++]
                )
            )
    }
    return max
}
console.log("res", maxArea([1,8,6,2,5,4,8,3,7]))