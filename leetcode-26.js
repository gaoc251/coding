/**
 * 删除排序数组中的重复项
 */
// var removeDuplicates = function (nums) {
//     return Array.from(new Set(nums))
// }

// var removeDuplicates = function (nums) {
//     return nums.reduce((prev, cur)=> prev.includes(cur)?prev: [...prev, cur], [])
// }

var removeDuplicates = function (nums) {
    let j = nums.length;
    for (let i = 0;i<j-1; i++) {
        if (nums[i] == nums[i+1]) {
            nums.splice(i+1, 1);
            j--;
            i--
        }
    }
    return nums
}

console.log("res", removeDuplicates([1,1,2]))
console.log("res", removeDuplicates([0,0,1,1,1,2,2,3,3,4]))