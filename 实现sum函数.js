/**
 * 写一个按照下面两种方式都能正常调用的 sum 方法
console.log(sum(2,3)); //  5
console.log(sum(2)(3)); //  5
 */
function sum (x) {
    if (arguments.length == 2) {
        return arguments[0]+arguments[1]
    } else {
        return function (y) {return x+y}
    }
}

console.log("result", sum(2,3))
console.log("result", sum(2)(3))