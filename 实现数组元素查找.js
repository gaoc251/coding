/**
 * 给定一个有序(非降序)数组A，可能含有重复元素，求最小的i使得A[i]等于target，不存在则返回-1。
1，2，3，5，6，7，7，10
target  = 7，return  5
target = 8,  return -1
 */
console.log("res", test([1,2,3,5,6,7,7,10], 7))
console.log("res", test([1,2,3,5,6,7,7,10], 8))
// function test (arr, target) {
//     for (var i = 0; i < arr.length;i++) {
//         if (arr[i] === target) {
//             return i
//         }
//     }
//     return -1;
// }

// function test(A,target)
// {
// 	let low = 0, high = A.length-1;
// 	while(low <= high)
// 	{
// 		// 注意：若使用(low+high)/2求中间位置容易溢出
// 		let mid = low+ high -low//((high-low)>>1); 
// 		if(A[mid] == target)
// 			return mid;
// 		else if(A[mid] < target)
// 			low = mid+1;
// 		else // A[mid] > target
// 			high = mid-1;
// 	}
// 	return -1;
// }

function test (nums, target) {
    let left = 0, right = nums.length - 1, mid;
    while (left <= right) {
        mid = (left + right) >> 1;
        if (nums[mid] === target) break;
        if (nums[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    console.log("left",left)
    console.log("right", right)
    if(left > right) return [-1, -1];
    let i = mid, j = mid;
    while(nums[i] === nums[i - 1]) i--;
    while(nums[j] === nums[j + 1]) j++;
    return [i, j];
};
