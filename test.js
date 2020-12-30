const nums1 = [1,2,3,0,0,0],m=3
const nums2 = [2,5,6],n=3
// var merge = function (nums1, m, nums2, n) {
//     for(let i = m;i<m+n;i++) {
//         nums1[i] = nums2[i-m]
//     }
//     console.log("nums1", nums1)
//     let nums = nums1.sort(function(a,b){
//         return a-b
//     })
//     return nums
// }

var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2);
    return nums1.sort((a,b)=> {
        return a-b
    })
}
console.log("merge", merge([1,2,3,0,0,0], 3, [2,5,6], 3))
