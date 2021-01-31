/**
 * 整数金额千分位加逗号
 * 12345678  =>  12,345,678
 */

function translate (str) {
    return parseFloat(str).toLocaleString()
}

console.log("res", translate('12345678'))

function format (str) {
    let decimals = '';
    // 判断是否有小数
    decimals = str.indexOf('.') > -1? str.split('.')[1] : ''
    let len = str.length;
    if (len <= 3) {
        return str;
    } else {
        let temp = '';
        let remainder = len % 3;
        temp = decimals ? '.'+ decimals : ''
        if (remainder >0) {
            // 不是3的倍数
            return str.slice(0, remainder) + ',' + str.slice(remainder, len).match(/\d{3}/g).join(',' + temp)
        } else {
            // 是3 的倍数
            return str.slice(0, len).match(/\d{3}/g).join(',' + temp)
        }
    }
}

console.log("res", format('12345678'))