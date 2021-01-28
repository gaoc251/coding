/**
 * 统计一个字符串出现最多的字母
 * 输入：aljghdfraaaasdenas
 * 输出：a
 */
function findStr (str) {
    let obj = {}, maxLen=0, res = ''
    for(var i=0;i<str.length;i++) {
        if (obj[str[i]]) {
            obj[str[i]]++
        } else {
            obj[str[i]]=1
        }
        if (obj[str[i]]>maxLen) {
            maxLen = obj[str[i]]
            res = str[i]
        }
    }
    return res
}
console.log('res', findStr('aljghdfraaaasdenas'))