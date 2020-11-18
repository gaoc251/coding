/**
 * 验证IP
 * 编写一个函数来验证输入的字符串是否是有效的 IPv4 或 IPv6 地址。
 */

var validIPAddress = function(IP) {
    let ip = IP.toLowerCase()
    // ipArr
    let ipArr = ip.indexOf(':') < 0? ip.split('.') : ip.split(':');
    if (ipArr.length != 4 && ipArr.length != 8) return 'Neither' 

    if (ipArr.length == 4) {
        for (let i = 0; i<ipArr.length;i++) {
            if (/^0.*/.test(ipArr[i])) return 'Neither';
            if (!/^[0-9]/.test(Number(ipArr[i]))) return 'Neither';
            if (Number(ipArr[i])<0 || parseInt( Number(ipArr[i]), 10)>255) return 'Neither';
        }
        return "IPv4";
    }

    if (ipArr.length == 8) {
        for (let i = 0; i<ipArr.length;i++) {
            if (Number(ipArr[i])<0 || parseInt(Number(ipArr[i]), 16)> Math.pow(2, 32)) return 'Neither';
        }
        return "IPv6";
    }
};

console.log("validIPAddress", validIPAddress("172.16.254.1"))
console.log("validIPAddress", validIPAddress("256.256.256.256"))
console.log("validIPAddress", validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"))
console.log("validIPAddress", validIPAddress("2001:0db8:85a3::8A2E:0370:7334"))
console.log("validIPAddress", validIPAddress("1e1.4.5.6"))