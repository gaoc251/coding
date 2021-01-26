// 给定数组 ['1a','2b','9c','5a'] ，输出出现次数最多的字母前数字之和 6。
function test (arr, num) {
    let obj = {}
    for (var i =0;i<arr.length;i++) {
        if (obj[arr[i][1]] == undefined) {
            arr[i][1] = Number(arr[i][0])
        } else {
            arr[i][1] += Number(arr[i][0])
        }
    }
    let res
    for (let item in obj) {
        if(obj[item] == num) {
            res = item
        }
    }
    return res
    
}
console.log("res", test(['1a','2b','9c','5a'], 6))