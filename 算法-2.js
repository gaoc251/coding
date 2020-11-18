/**
 * 数组扁平，去重，排序
 * 输入：[[1,2,2],[3,4,5,5],[6,7,8,9,[11,12,[12,13,[14]]]],10]
 */

var arr = [[1,2,2],[3,4,5,5],[6,7,8,9,[11,12,[12,13,[14]]]],10];
var arrFlat = arr.flat(4)
var arrdouble = Array.from(new Set(arrFlat))
var arrsort = arrdouble.sort(function(a,b) {
    return a-b
})
console.log("arr", arr)
console.log("arr去重", arrFlat)
