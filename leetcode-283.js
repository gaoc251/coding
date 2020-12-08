/**
 * 移动0
 */

// var moveZeroes = function(nums) {
//     let L = 0, R = 1;
//     if (nums.length == 1) return nums;
//     while (R<nums.length) {
//         if (nums[L] == 0) {
//             if (nums[R] == 0) {
//                 R++;
//             } else {
//                 let temp = nums[R];
//                 nums[R] = nums[L];
//                 nums[L] = temp;
//                 L++;
//             }
//         } else {
//             L++;
//             R++;
//         }
//     }
//     return nums
// };

var moveZeroes = function(nums) {
    let j = 0;
    for (let i = 0;i<nums.length; i++) {
        if (nums[i] != 0) {
            nums[j] = nums[i];
            if (i !=j) {
                nums[i] = 0;
            }
            j++
        }
    }
    return nums
};


console.log("res", moveZeroes([0,1,0,3,12]))
console.log("res", moveZeroes([2,1]))