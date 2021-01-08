function foo (arr) {
//     var cloneArr = arr.concat()
//     cloneArr.sort(function(n1,n2) {
//         return Math.random() - 0.5
//     })
//     return cloneArr
// }

// console.log("foo", foo(arr))

// // 递归的方式:性能不好
// function foo1(arr) {
//     var result = [];
//     var cloneArr = arr.concat();
//     (function(){
//         if (!cloneArr.length){return}
//         var index = Math.floor(Math.random()*cloneArr.length);
//         result = result.concat(cloneArr.splice(index, 1))
//         arguments.callee()
//     })();
//     return result;
// }
// console.log("foo1", foo1(arr))