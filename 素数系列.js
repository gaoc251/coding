/**
 * 判断一个数是不是素数
 */
function isPrinme (num) {
    for (var i = 2;i<num;i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
}
console.log("是素数吗", isPrinme(4))

/**
 * 输出n内的所有素数
 */
function prinmeList(n) {
    var res = []
    for (var i = 2; i < n; i++) {
        var a = true; //状态码判定是否打印
        for (var j = 2; j < i; j++) {
            //判断i能否被j整除
            if (i % j == 0) {
                //能被整除则说明不是素数，修改布尔值为false
                a = false;
            }
        }
        //打印素数
        if (a) {
            res.push(i)
        }
    }
    return res
}
console.log("素数", prinmeList(9))


function findPrime () {
    var list = [];
    for (let n = 2;n<1000000;n++) {
        let isPrime = true;
        let sqrt = Math.sqrt(n);
        for (var i = 2;i<= sqrt;i++) {
            if (n%i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            list.push(n)
        }
    }
    return list
}

console.log("100万内的素数", findPrime())