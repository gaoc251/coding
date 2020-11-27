/**
 * promise 的特性，优缺点，实现
 * 
 * 特性：
 *  1、三种状态
 *  2、接受回调函数作为参数，该函数包含resolve和reject
 *  3、then返回一个新的promise实例，并接收成功和失败两个回调
 *  4、catch方法返回一个新的promise实例
 *  5、finally不管状态如何都会执行，回调不接受任何参数
 *  6、promise all将多个promise实例，包装成一个新的promise实例。该方法接收一个由promise对象组成的数组作为参数，注意参数中只要有一个实例触发了catch方法，就会触发promise.all的catch方法。
 *  7、promise race只要一个实例率先改变状态就会传递给race
 * 
 * 优点：
 *  1、统一异步api
 *  2、更适合处理一次性的事件
 *  3、解决了回调地狱的问题
 *  4、更好的异常处理方式
 * 
 * 缺点：
 *  1、无法取消promise
 *  2、如果不设置回调，promise内部抛出，外部接收不到
 *  3、当处于pending的阶段，无法知道进行到什么阶段
 *  4、报错堆栈上下文不友好
 */

class promise {
    constructor (executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        let resolve = value => {
            if (this.state == 'pending'){
                this.state = 'fulfilled';
                this.value = value;
            }
        }
        let reject = reason => {
            if (this.state == 'pending') {
                this.state = 'rejected';
                this.value = value;
            }
        }
        try {
            // 立即执行
            executor (resolve, reject) 
        } catch (err) {
            reject(err)
        }
    }
    then (onFulfilled, onRejected) {
        if (this.state === 'fulfilled') {
            let x = onFulfilled(this.state)
        } 
        if (this.state == 'rejected') {
            let x = onRejected(this.reason)
        }
    }
}