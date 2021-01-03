/**
 * vue defindeProperty 实现拦截
 * 进行数据拦截
 * Object.definePropertys
 */
function observer (data) {
    // 判断如果没有传值，或者传值不是一个对象，就直接return
    if (!data || typeof data !== 'object') {
        return
    }
    Object.keys(data).forEach(item => {
        observerProperty(data, item, data[item])
    })
}

function observerProperty (target, key, value) {
    observer (value);
    Object.defineProperty(target, key, {
        get () {
            return value
        },
        set (val) {
            value = val
        }
    })
}
