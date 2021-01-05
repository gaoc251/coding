/**
 * async和await
 * await 后面接一个会return promise的函数并执行它
 */
function sezi () {
    return new Promise((resolve, reject)=>{
        let sino = parseInt(Math.random()*6 +1)
        setTimeout(()=>{
            resolve(sino)
        }, 3000)
    })
}

async function test() {
    let n = await sezi()
    console.log("n", n)
}
test ()