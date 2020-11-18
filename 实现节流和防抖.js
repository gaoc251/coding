// 防抖
function dobounce (fn) {
    let timeout = null;
    return function () {
        // 每当用户输入的时候，把前一个setTimeout clear
        clearTimeout(timeout);
        // 然后又创建一个新的setTimeout,这样就能保证输入的字符后的interval间隔内如果还字符输入的话，不触发fn函数
        timeout = setTimeout(()=>{
            fn.apply(this, arguments)
        }, 500)
    }
}

function sayHi() {
    console.log("防抖成功")
}


// 节流：每次触发事件时都判断当前是否有等待执行的函数
function throttle () {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
        if (!canRun) return;//在函数开头判断标记是否为true，不为true则return
        canRun = false;
        setTimeout(()=>{
            fn.apply(this, arguments);
            canRun = true;
        }, 500)
    }
}