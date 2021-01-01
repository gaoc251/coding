Array.prototype.myIndexOf = function (param, start=0) {
    // 如果start >= 数组长度，此时this[start]越界，返回-1
    if (start >= param.length) return -1
    // 如果start小于0，判断start + this.length
    if (start < 0) {
        start = start + this.length < 0?0:start+this.length
    }
    // start处理完毕，开始从start出遍历数组，查找元素下标
    for (let i= start;i<this.length;i++) {
        if (this[i] == param) return i
    }
    // 没找到
    return -1
}