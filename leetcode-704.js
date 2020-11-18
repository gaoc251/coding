// 二分查找
// 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

var search = function(nums, target) {
    let left = 0;
    let right = nums.length;
    let mid = Math.floor((left + right)/2);
    console.log(left, right,mid)
    while(left<=right) {
        if (left == right && nums[mid] != target) {
            return -1
        }
        if (nums.length==1 && nums[mid] != target) {
            return -1
        }
        if (nums[mid]>target) {
            right = mid-1
        } else if (nums[mid]<target){
            left = mid+1
        } else {
            return mid;
        }
        mid = Math.floor((left + right)/2);
        console.log("mid",left, right,mid)
    }
    if (left>right) {
        return -1;
    }
};

console.log('target', search([-1,0,3,5,9,12], 9)) // 4
console.log('target', search([-1,0,3,5,9,12], 2)) // -1
console.log('target', search([5], -5)) // -1
console.log('target', search([-1,0,5], 2))