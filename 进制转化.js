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
整数金额千分位加逗号
12345678  =>  12,345,678

 */

function parse(number,radix = 10) {
    if (arguments.length === 1) {
        return parseInt(number)
    } else if (arguments.length == 2){
        let temp = number.toString();
        let sum = 0
        for(var i = 0;i<temp.length;i++) {
            if (temp[i]>=radix) {
                return "抛出异常，Invalid number or radix"
            }
            sum = sum + Math.pow(radix, (temp.length-i-1))*temp[i];
        }
        return sum;
    }
}
console.log("进制转化", parse(56.6))
console.log("进制转化", parse(56, 6))
console.log("进制转化", parse(56, 7))
console.log("进制转化", parse(56, 8))