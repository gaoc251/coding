// 给定数组 ['1a','2b','9c','5a'] ，输出出现次数最多的字母前数字之和 6。
function test(data) {
    var newObj = {},maxlen=0
    for(var i=0;i<data.length;i++) {
        if (newObj[data[i][1]]!= undefined) {
            newObj[data[i][1]]+= Number(data[i][0])
        } else {
            newObj[data[i][1]] = 1
        }
        if(newObj[data[i][1]]>maxlen) {
            maxlen = newObj[data[i][1]]
        }
    }
    return maxlen
}
console.log(test(['1a','2b','9c','5a']))