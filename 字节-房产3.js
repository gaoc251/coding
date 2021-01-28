/**
 * 时长转化
 * 通话时长现实格式一般为时分秒 xx:xx:xx  ，如 01:08:20，即4100秒， 写一个函数将它转化为总秒数
 */
function computeSeaconds(str) {
    debugger
    let arr = str.split(':');
    let sum = 0;
    for (var i = 0;i<arr.length;i++) {
        let temp = arr[i];
        sum = sum + Number(temp)? 0: Number(temp)* Math.pow(60, 2-i)
    }
    return sum;
}
console.log("res", computeSeaconds("01:08:20"))