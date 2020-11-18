/**
 * 日期转换标准格式
 * 将日期时间转换为指定格式，如：YYYY-mm-dd HH:MM表示2019-06-06 19:45
 */

var date = new Date();
console.log("日期", `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}:${date.getMinutes()}`)

function dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };

    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            console.log("ret", opt[k])
            fmt = fmt.replace(ret[1], 
                (
                    ret[1].length == 1) ? 
                    (opt[k]) : 
                    (opt[k].padStart(ret[1].length, "0"))
                )
        };
    };
    return fmt;
}

console.log("格式转化", dateFormat("YYYY-mm-dd HH:MM", date))