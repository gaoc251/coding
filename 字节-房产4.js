/**
 * 实现一个函数 parse(number,radix=10)
功能：将radix（2=<radix<=10）进制的数字number转为10进制数
要求：
 1. number可以是数字也可以是字符串，如果number是小数，则只转化整数部分
 2. 数字进制不合法时，抛出异常，比如232不可能是3进制数
比如：
parse(56.6) // 56
parse(56,7) //41
parse(56,8) //46
parse(56,6) // 抛出异常，Invalid number or radix
 */
function parse (number, radix) {
    if (!radix) return Math.floor(number);
    let str = String(number)
    let sum = 0
    for (var i = 0; i<str.length; i++) {
        let temp = str[i]
        if (Number(temp) >= radix) {
            return "Invalid number or radix"
        }
        sum += temp * Math.pow(radix, str.length-i-1)
    }
    return sum
}
console.log("res", parse(56.6))
console.log("res", parse(56, 7))
console.log("res", parse(56, 8))
console.log("res", parse(56, 6))