/**
 * 通话时长现实格式一般为时分秒 xx:xx:xx  ，如 01:08:20，即4100秒， 写一个函数将它转化为总秒数
 */
function timeSum(str) {
    var timeArr = str.split(':')
    return timeArr[0]*3600+timeArr[1]*60 + timeArr[2]*1
}
console.log("时间转换",timeSum('01:08:20'))