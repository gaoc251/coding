var obj = {
    a:1,
    arr: [1,2],
    nation: "zh",
    birthpalces: ['bj', 'hz']
}
console.log("res", deepClone(obj))

// 深拷贝
function deepClone(obj) {
    // 过滤一些特殊情况
    if(obj === null) return null;
    if(typeof obj !== "object") return obj;
    if(obj instanceof RegExp) { // 正则
         return new RegExp(obj);
    }
    if(obj instanceof Date) { // 日期
         return new Date(obj);
    }
    // let newObj = {}
    // let newObj = new Object()
    let newObj = new obj.constructor; // 不直接创建空对象的目的：克隆的结果和之前保持所属类  =》 即能克隆普通对象，又能克隆某个实例对象
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) {
            newObj[key] = deepClone(obj[key]);
        }
    }
    return newObj;
}