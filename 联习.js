// 防抖：数据联想，只执行最后一次就好了

function docunce (func, wait) {
    let context = this;
    let args = arguments;
    let timeout;
    return function () {
        clearTimeout(timeout)
        timeout =  setTimeout(function(){
            func.apply(context, args)
        }, wait)
    }
}


// 节流：一定时间内只有一次有效
function trottle (func, wait) {
    let context = this;
    let args = arguments;
    let time = 0;
    return function(){
        let now = +new Date();
        if (now - time > wait) {
            func.apply(context, argsments)
            time=now
        }
    }
}