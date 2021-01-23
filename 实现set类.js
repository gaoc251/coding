/**
 * 实现存储任何类型的唯一值，无论是原始值还是对象引用
 */

let unique = (array) => {
    return [...new Set(array)]
}

console.log(unique([ 1, 2, 3, 4, 1, 2, 5 ])) // [1, 2, 3, 4, 5]

class Set {
    constructor (iterable) {
        // 使用数组来存储set的每一项元素
        this.value = []
        // 判断是否使用new调用
        assert(this instanceof Set, 'Constructor Set requires "new"');

        if (isDef(iterable)) {
            // 是可迭代对象才进行下一步的for of元素添加
            assert(isIterable(iterable), `${iterable} is not iterable`)
        }

        // 循环可迭代对象，初始化
        forOf(iterable, (value) => {
            this.add(value)
        })
    }
    
    // 返回value的长度
    get size () {
        return this.value.length
    }

    // 使用数组的includes方法判断是否包含value
    has (val) {
        return this.value.includes(val)
    }

    add (val) {
        if (!this.has[val]) {
            this.value.push(val)
        }
    }

    // 在删除之前先判断value是否存在用之当做返回值,存在则通过splice方法移除
    delete (val) {
        let res = this.has(val);
        if (res) {
            this.value.splice(this.value.indexOf(val), 1)
        }
    }

    clear () {
        this.value = []
    }

    forEach (callback, thisArg) {
        forOf(this.value(), (val)=>{
            callback.call(thisArg, val, val, this)
        })
    }

    // 返回迭代对象，该对象中的值是set中的value
    keys () {
        return new Iterator(this.value)
    }

    values () {
        return this.keys()
    }

    entries () {
        return new Iterator(this.value, (value) => [ value, value ])
    }

    [Symbol.iterator] () {
        return this.values()
    }
}

// 用来对某些条件进行判断，抛出错误
const assert = (condition, msg) => {
    if (!condition) throw new Error(msg)
}

// 过滤null或者undefined
const isDef = (value) => {
    return value != void 0
}

// isIterable, 简单判断value是否是迭代器对象.
const isIterable = (value) => {
    return isDef(value) && typeof value[ Symbol.iterator ] === 'function'
}

// forOf, 模拟for of行为, 对迭代器对象进行遍历操作。
const forOf = (iterable, callback, ctx) => {
    let result
  
    iterable = iterable[ Symbol.iterator ]()
    result = iterable.next()
  
    while (!result.done) {
      callback.call(ctx, result.value)
      result = iterable.next()
    }
}