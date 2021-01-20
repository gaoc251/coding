/**
 * format实现
 */
function format(str,fmt) {
    var usedDate = new Date(str);
    var o = {
        "M+": usedDate.getMonth() + 1, //月份 
        "d+": usedDate.getDate(), //日 
        "h+": usedDate.getHours(), //小时 
        "m+": usedDate.getMinutes(), //分 
        "s+": usedDate.getSeconds(), //秒 
        "q+": Math.floor((usedDate.getMonth() + 3) / 3), //季度 
        "S": usedDate.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (usedDate.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

var pattern = "yyyy-MM-dd hh:mm:ss";
var usedDay = 1454112000000;

usedDate=format(usedDay,pattern);

console.log("sss", usedDate)


