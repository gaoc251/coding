/**
 * 输入一个数组和一个数，返回数组中和为这个数字的两个数，例如输入[3, 2, 5, 2,8] 7，输出 [2, 5] 
 */
function test (arr, num) {
    let res = []
    for (var i =0 ;i<arr.length;i++) {
        if (arr.indexOf(num - arr[i]) > -1 && arr[i] < num) {
            res.push(arr[i])
            res.push(num-arr[i])
            return JSON.stringify(res)
        }
    }
}

console.log("test", test([3, 2, 5, 2,8], 7))