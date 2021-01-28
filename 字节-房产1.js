/**
 * 1、实现一个repeat方法，要求如下：
// 需要实现的函数
function repeat (func, times, wait) {}，
// 使下面调用代码能正常工作
const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("hellworld");//会输出4次 helloworld, 每次间隔3秒
 */


function repeat (func, times, wait) {
    return function(str) {
        for(let i=0;i<times;i++) {
            setTimeout(function timer(){
                func(str)
            }, wait*i)
        }
    }
}

const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc("hellworld");//会输出4次 helloworld, 每次间隔3秒