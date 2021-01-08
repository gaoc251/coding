// 第一种
var arr = [0,1,2,3,4,5,6,7,8,9]

function foo (arr) {
    var cloneArr = arr.concat()
    cloneArr.sort(function(n1,n2) {
        return Math.random() - 0.5
    })
    return cloneArr
}

console.log("foo", foo(arr))

// 递归的方式:性能不好
function foo1(arr) {
    var result = [];
    var cloneArr = arr.concat();
    (function(){
        if (!cloneArr.length){return}
        var index = Math.floor(Math.random()*cloneArr.length);
        result = result.concat(cloneArr.splice(index, 1))
        arguments.callee()
    })();
    return result;
}
console.log("foo1", foo1(arr))

// 洗牌算法：推荐
function foo2 (arr) {
    var cloneArr = arr.concat();
    var len  = cloneArr.length;
    for (var i = 0;i<len; i++) {
        var index = Math.floor(Math.random() * len);
        var temp = cloneArr[index];
        cloneArr[index] = cloneArr[i];
        cloneArr[i] = temp;
    }
    return cloneArr;
}
console.log("foo2", foo2(arr))