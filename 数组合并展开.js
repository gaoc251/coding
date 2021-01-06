/**
 * 数组合并展开（写的太慢了，用了半个多小时）
输入：[['a','b'],['n','m'],['0','1']]
输出：['an0','an1','am0','am1','bn0','bn1','bm0','bm1'] 
 */
var perm = function(s) {
    var result = [];
    if (s.length <= 1) {
      return [s];
    } else {
      for (var i = 0; i < s.length; i++) {
        var c = s[i];
        var newStr = s.slice(0, i) + s.slice(i + 1, s.length);
        var l = perm(newStr);
           
        for (var j = 0; j < l.length; j++) {
          var tmp = c + l[j];
          result.push(tmp);
        }
      }
    }
    return result;
};  
console.log("perm", perm('abc')) // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]


const arr = [['a','b'],['n','m'],['0','1']]
// function foo (data) {
//     let res = [];
//     console.log("arr", data)
// }
// console.log("foo", foo(arr))


const cp = arrs => arrs.reduce((a,b) => {
    const arr =[];
    a.forEach(i => {
        b.forEach(j=>{
            arr.push(i+j)
        })
    })
    return arr
})

console.log("cp", cp(arr))