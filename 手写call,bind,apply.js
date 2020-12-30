/**
 * call
 * 传进的是数组
（1）首先，context是可选的参数，表示执行的上下文，如果不传的话，默认上下文为window
（2）接下来，为context创建一个fn属性，并将值设置为需要调用的函数
（3）由于call可以传入多个参数作为调用函数的参数，所以需要将参数都剥离出来
（4）然后调用函数，并将函数对象的上的函数删除
 */
Function.prototype.mycall = function (context) {
    // 判断调用对象
    if (typeof this !== 'function') {
        console.error("type error")
    }
    // 获取参数
    let args = [...arguments].slice(1);
    let result = null;
    // 判断context是否传入，否则默认window
    context = context || window;
    // 将调用函数设为对象方法
    context.fn = this;
    // 调用函数
    result = context.fn(...args);
    delete context.fn;
    return result;
}

/**
 * apply函数
 * 
 (1)首先，context是可选的参数，表示执行的上下文，如果不传的话，默认上下文为window
（2）接下来，为context创建一个fn属性，并将值设置为需要调用的函数
（3）由于call可以传入包含多个参数的数组作为调用函数的参数，所以需要将参数都剥离出来
（4）然后调用函数，并将函数对象的上的函数删除
 */
Function.prototype.myapply = function (context) {
    // 判断调用对象
    if (typeof this !== 'function') {
        console.error("type error")
    }
    let result = null;
    // 判断context是否传入，否则默认window
    context = context || window;
    // 将调用函数设为对象方法
    context.fn = this;
    // 调用函数
    if (arguments[1]) {
        result = context.fn(...arguments)
    } else {
        result = context.fn()
    }
    delete context.fn;
    return result;
}

/**
 * bind
 * 返回的是一个函数
 * 
（1）首先，context是可选的参数，表示执行的上下文，如果不传的话，默认上下文为window
（2） 获取参数
（3） bind会返回一个函数，对于函数有两种的调用方法
 */
Function.prototype.mybind = function (context) {
    // 判断调用对象
    if (typeof this !== 'function') {
        console.error("type error")
    }
    const _this = this;
    const args = [...arguments].slice(1);
    // 返回一个函数
    return function F() {
        // 因为返回的是一个函数，我们可以 new F（）
        if (this instanceof F) {
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, args.concat(...arguments))
    }
}