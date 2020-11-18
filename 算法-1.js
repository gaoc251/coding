/**
 * 合并两个有序数组
 * 输入：
 * nums1=[1,2,3] m=3
 * nums2=[2,5,6] n=3
 * 输出：
 * [1,2,2,3,5,6]
 */
var merge = function(nums1,m, nums2,n) {
    var len1 = m-1, len2 = n-1;
    var len = m+n-1;

    while (len2 >= 0) {
        if (len1 < 0) {
            console.log("len前", len)
            nums1[len--] = nums2[len2--];
            console.log("len后", len)
            continue
        }
        console.log("len前", len)
        nums1[len--] = 
        nums1[len1]>= nums2[len2]?
        nums1[len1--]:nums2[len2--]
        console.log("len后", len)
    }
    return nums1
}

console.log("result", merge([1,2,3], 3, [2,5,6], 3))