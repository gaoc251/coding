// 算法：数组合并展开（写的太慢了，用了半个多小时）
// 输入：[['a','b'],['n','m'],['0','1']]
// 输出：['an0','an1','am0','am1','bn0','bn1','bm0','bm1'] 
const arr = [['a','b'],['n','m'],['0','1']]
const cp = arrs => arrs.reduce((a,b) => {
    let res = []
    a.forEach(i=>{
        b.forEach(j=>{
            res.push(i+j)
        })
    })
    return res
})
console.log("arr", cp(arr))