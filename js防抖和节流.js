/**
 * 场景：页面滚动监听回到顶部
 * 使用防抖，控制性能
 * 监听浏览器滚动事件，返回当前滚动条与顶部的距离
 * 在第一次触发事件时，不利己执行函数，而是给出一个期限值,比如200ms。
 * 如果200ms内没再触发，就执行函数
 * 再次触发，那么当前即使取消，重新开始计时
 */

function debounce (fn, delay) {
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer);
        } 
        timer = setTimeout(fn, delay)
    }
}

/**
 * 节流
 * 类似闸门定期开放。让函数执行一次后，在某个时间内暂时失效，过段时间再重新激活
 */

function throttle (fn, delay) {
    let valid = true
    return function () {
        if (!valid) {
            // 休息时间，暂时不接客
            return false;
        } 
        // 工作时间，执行函数并且在间隔期内把状态为设为无效
        valid = false
        setTimeout ( () => {
            fn();
            valid = true;
        }, delay)
    }
}

// 节流：实时搜索，搜索框input事件
// 防抖：页面的resize