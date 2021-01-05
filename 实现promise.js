/**
 * 定义整体构造函数，将promise向外暴露
 * https://blog.csdn.net/lgno2/article/details/109446598
 */

(
    function (window) {
        /**
         * promise 构造函数
         * executor：执行器函数
         */

        function Promise (executor) {

        }

        // 向外暴露 promise
        window.Promise = Promise;
    }
)()

/**
 * Promise 原型对象的then，指定一个成功或者失败的回调函数，返回一个新的promise对象
 */
Promise.prototype.then = function (onResolved, onRejected) {
    var self = this;
    if (self.status == 'pending') {
        // promise 当前状态还是pending状态，将回调函数保存起来
        self.callbacks.push({
            onResolved() {onResolved(self.data)},
            onRejected() {onRejected(self.data)}
        })
    } else if (self.status == 'resolved') {
        // 
        setTimeout(() => {
            const result = onResolved(self.data)
            if (result instanceof Promise) {
                // 
                result.then(
                    value => {resolve(value)},
                    reason => {reject(reason)}
                )
            } else {
                // 如果返回的不是promise，return的promise状态是resolved，value就是返回值
                resolve(result)
            }
        });
    } else {
        // 
        setTimeout(() => {
            onRejected(self.data)
        });
    }
}

function resolve(value) {
    // 当前状态不是pending，则不执行
    if (this.status !== 'pending') {
        return
    }
    // 将状态改为resolved
    this.status = 'resolved'
    this.data = value
    // 如果有待执行的callback函数，立即异步执行回调调函数onResoleve
    if (self.callbacks.length > 0) {
        setTimeout(() => {
            self.callbacks.forEach(callbackObj => {
                callbackObj.onResolved(value)
            }) 
        });
    }
}

/**
 * Promise 原型对象的.catch，指定一个失败的回调函数，返回一个新的promise函数
 */
Promise.prototype.catch = function () {
    //
}

/**
 * Promise 函数对象上的resolve方法，返回一个指定结果的promise对象
 */
Promise.resolve = function (value) {}

/**
 * Promise 函数对象的reject方法，返回一个指定的reason的失败状态的promise对象
 */
Promise.reject = function (value) {}

/**
 * Promise 函数对象的all方法，返回一个promise对象，只有当所有promise都成功时，返回的promise状态才成功
 */
Promise.all = function (arr) {
    let aResult = []; // 用于存放每次执行后的返回结果
    return new Promise ((reslove, reject) => {
        let i = 0;
        next(); // 开始逐个执行数组中的函数
        function next() {
            arr[i].then ((res)=>{
                aResult.push(res)
                i++;
                if (i == arr.length) { // 如果函数都执行完，就执行reject
                    resolve(aResult)
                } else {
                    next()
                }
            })
        }
    })
}

/**
 * Promise 函数对象的race方法，返回一个promise对象，状态有第一个完成的promise决定
 * 赛跑的问题
 */
Promise.race = function (values) {
    return new Promise((resolve, reject) => {
        if (!values.length) return;
        values.forEach(item => {
            if (isPromise(item)) {
                item.then((data)=>{
                    reslove(data)
                }, reject)
            } else {
                resolve(item)
            }
        })
    })
}


const promiseA = new Promise ((resolve, reject) => {
    resolve(7777)
})