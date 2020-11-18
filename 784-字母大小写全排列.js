/**
 * 给定一个字符串S，通过将字符串S中的每个字母转变大小写，我们可以获得一个新的字符串。返回所有可能得到的字符串集合。

    示例:
    输入: S = "a1b2"
    输出: ["a1b2", "a1B2", "A1b2", "A1B2"]

    输入: S = "3z4"
    输出: ["3z4", "3Z4"]

    输入: S = "12345"
    输出: ["12345"]
 */

 /**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    console.log("S", S)
    var result = [],arr = S.split('').reverse();
    for(var i=0;i<arr.length;i++) {
        if (/[a-zA-Z]/.test(S[i])) {
            var s1='', s2='';
            s1 = getR(arr,i,arr[i].toLowerCase()).join('');
            s2 = getR(arr,i,arr[i].toUpperCase()).join('')
            result.push(s1,s2)
        }
    }
    if (result.length == 0) {
        result.push(S)
    }
    return result;
};
function getR(arr,i,R){
    var temp = arr;
    temp[i]= R
    return temp
}
console.log("result", letterCasePermutation('a1b2'))
console.log("result", letterCasePermutation('3z4'))
console.log("result", letterCasePermutation('12345'))