var arr = [0,1,2,3,4,5,6,7,8,9]
function foo (arr) {
    var cloneArr = arr.concat();
    var len = cloneArr.length;
    for(var i=0;i<len;i++) {
        var index = Math.floor(Math.random() * len);
        var temp = cloneArr[index];
        cloneArr[index] = cloneArr[i];
        cloneArr[i] = temp
    }
    return cloneArr
}
console.log("clone", foo(arr))