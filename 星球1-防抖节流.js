/**
 * 防抖：在事件触发n秒之后，在执行。如果在这n秒之中再触发，则重新计时
 * 场景：按钮提交，多次点击，只执行最后一次。搜索框联想只执行最后一次。
 * 
 * 节流：队规时间内只执行一次
 * 场景：拖拽，监控浏览器的resize
 */

//  防抖
function debounce (func, wait) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout (function () {
            func.apply(context, args)
        }, wait)
    }
}

// 节流
function throttle (func, wait) {
    let context, args;
    let previous;
    return function () {
        let now = +new Date();
        context = this;
        args= arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now;
        }
    }
}