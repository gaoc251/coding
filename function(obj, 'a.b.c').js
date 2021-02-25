/**
 * 实现一个函数 find(obj, str)，满足:
如var obj = {a:{b:{c:1}}};
find(obj,'a.b.c') //返回1
find(obj,'a.d.c') //返回undefined 
 */
function getValue(obj, path) {
    if (typeof path !== 'string') throw new Error(`参数传入类型错误`);

    const splitFlag = path.indexOf('.');
    if (splitFlag < 0) return obj[path];

    const prefix = path.substring(0, splitFlag);
    const lastFix = path.substring(splitFlag + 1);

    if (!lastFix) return obj;
    if (obj[prefix]) {
        return getValue(obj[prefix], lastFix);
    } else {
        throw new Error(`取值不正确`);
    }
}

const obj = {
    a: {
        b: {
            c: 1
        }
    }
}
console.log("res", getValue(obj, 'a.b.c')) //返回1