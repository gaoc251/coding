/**
 * format实现
 */
function format(str,fmt) {
    var usedDate = new Date(str);
    var o = {
        'M+': usedDate.getMonth() + 1,
        'd+': usedDate.getDate(),
        'h+': usedDate.getHours(),
        'm+': usedDate.getMinutes(),
        's+': usedDate.getSeconds()
    }
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (usedDate.getFullYear()+ '').substr(4- RegExp.$1.length))
    }
    for (let k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, 
                (RegExp.$1.length == 1) ? 
                (o[k]) : 
                (
                    ("00" + o[k]).substr(
                        ("" + o[k]).length)
                    )
                );
        }
    }
    return fmt
}

var pattern = "yyyy-MM-dd hh:mm:ss";
var usedDay = 1454112000000;

usedDate=format(usedDay,pattern);

console.log("sss", usedDate)


