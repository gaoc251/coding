/**
 * 初始红灯、2s后变绿灯、3s后变黄灯、4s后变红灯，如此反复
 */

function red () {
    return new Promise((resolve, reject) => {
        console.log("红");
        // 调用绿灯
        setTimeout(()=>{
            resolve(green())
        }, 2000)
    })
}

function green() {
    return new Promise((resolve, reject) => {
        console.log("绿")
        setTimeout(()=>{
            resolve(yellow())
        }, 3000)
    })
}

function yellow () {
    return new Promise((resolve, reject) => {
        console.log("黄")
        setTimeout(()=>{
            resolve(red())
        }, 4000)
    })
}

red();