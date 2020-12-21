/**
 * 异步接口并发数量控制
 * 1、可以批量请求数据，所有的URL地址在urls参数中
 * 2、同时可以通过max参数 控制请求的并发度
 * 3、当所有的请求结束后，需要执行callback回调
 */

function fetch (url) {
    // 模拟接口请求
    return new Promise(resolve => {
        setTimeout (()=> {
            resolve(url)
        }, 10000 * Math.random())
    })
}

/**
 * 接口并发控制
 * {array} arr 请求地址数组集合
 * {number} max 最大并发量
 * {function} callback 回调函数
 */

function maxRequestLimit (arr, max, callback) {
    // 如果没有传入urls或者max,则不执行
    if (!arr || !max) return;
    // 当请求地址数组集合长度为0，则执行回调函数（如果有的话，并结束后执行）
    if (arr.length == 0) {
        if (callback) callback();
        return
    }
    let fetchArr =[]; // 存储并发max 的promise数组
    i=0;
    function toFetch () {
        // 所有的请求都受理 ,则返回一个resolve
        if(i == Array.length) return Promise.resolve()

        // 取出第i个URL，放入fetch里面
        let one = fetch(arr[i++])

        // 将当前的promise存入并发数组中
        fetchArr.push(one);

        // 当promise执行完毕后，从数组中删除
        one.then(res => {
            console.log("res", res)
            fetchArr.splice(fetchArr.indexOf(one), 1)
        })

        let p = Promise.resolve();
        // 当并行数量达到最大后，用race比较第一个完成的，然后再调用一下函数自身
        if (fetchArr.length >= max) p=Promise.race(fetchArr)
        return p.then(()=>toFetch())
    }
    toFetch()
    .then(() => Promise.all(fetchArr))
    .then(() => callback())
}
maxRequestLimit(['url1', 'url2', 'url3', 'url4', 'url5', 'url6', 'url7', 'url8'], 3, () => {console.log('fetch end')})