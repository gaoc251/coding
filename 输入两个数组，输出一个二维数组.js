/**
 * 输入两个数组，输出一个二维数组，[0]是第一个数组中不重复部分 [1]是第二个数组中不重复部分 
 * 例如：输入[1,3,5,7,8]和[2,3,5,9,10]输出[[1,7,8],[2,9,10]] 
 */
function test (arr1, arr2) {
    let _arr1 = [];
    let _arr2 = [];
    for (var i = 0; i< arr1.length;i++) {
        if (arr2.indexOf(arr1[i]) == -1) {
            _arr1.push(arr1[i])
        }
    }
    for(var j = 0; j<arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) == -1) {
            _arr2.push(arr2[j])
        }
    }
    return [_arr1, _arr2]
}

console.log("res", test ([1,3,5,7,8], [2,3,5,9,10]))