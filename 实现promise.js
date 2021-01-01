/**
 * 定义整体构造函数，将promise向外暴露
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
    //
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