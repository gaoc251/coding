/**
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:
输入: [1,3,5,6], 5
输出: 2

示例 2:
输入: [1,3,5,6], 2
输出: 1

示例 3:
输入: [1,3,5,6], 7
输出: 4

示例 4:
输入: [1,3,5,6], 0
输出: 0
 */

var searchInsert = function(nums, target) {
    let l = 0, r = nums.length;
    let mid;
    if (nums[0] > target) {
        return 0 
    } else if (nums[nums.length-1] < target){
        return nums.length
    }
    while (l<r) {
        mid = Math.floor((l+r)/2)
        if (nums[mid] < target) {
            l = mid+1;
        } else if (nums[mid] > target) {
            r = mid
        } else {
            return mid;
        }
    }
    return l;
};
// console.log("res", searchInsert([1,3,5,6], 5))
console.log("res", searchInsert([1,3,5,6], 2))