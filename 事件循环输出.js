// async function async1() {
//     console.log('a') 
//     await async2() 
//     console.log('b')
// }
// async function async2() {
//     console.log('c')
// }

// console.log('d') 
// setTimeout(function () {
//     console.log('e')
// }, 0) 
// async1() 
// new Promise(function (resolve) {
//     console.log('f') 
//     resolve()
// }).then(function () {
//     console.log('g')
// })
// console.log('h')

// 题2
// function a () {
//     b()
//     console.log("a")
// }
// function b () {
//     console.log("b")
//     setTimeout(function(){
//         console.log("c")
//     }, 2000)
// }

// a() // b a c

// 题3
// console.log("start")
// setTimeout(function(){
//     console.log("setTimeout")
// }, 0)

// Promise.resolve().then(function(){
//     console.log("promise1")
// }).then(function(){
//     console.log("promise2")
// })

// console.log("end")

// // start end promise1 promise2 setTimeout 


// 题4
// async function async1 () {
//     console.log("async1 start")
//     await async2();
//     console.log("async1 end")
// }

// async function async2 () {
//     console.log("async2")
// }

// console.log("script start")
// setTimeout(function() {
//     console.log("setTimeout")
// }, 0)
// async1()
// new Promise(function(resolve){
//     console.log("promise1")
//     resolve()
// }).then(function(){
//     console.log("promise2")
// })
// console.log("script end")


// // script start
// // async1 start
// // async2
// // promise1
// // script end
// // async1 end
// // primse2
// // settimeout



// 题5
// console.log("start")
// setTimeout(()=>{
//     console.log("children2")
//     Promise.resolve().then(()=>{
//         console.log("children3")
//     })
// }, 0)

// new Promise(function(resolve, reject) {
//     console.log("children4")
//     setTimeout(function(){
//         console.log("children5")
//         resolve("children6")
//     },0)
// }).then((res)=>{
//     console.log("children7");
//     setTimeout(()=>{
//         console.log(res);
//     }, 0)
// })
// // start children4 children2 children3 children5 children7 children6


// 题6
// const p = function () {
//     return new Promise((resolve, reject) => {
//         const p1 = new Promise((resolve, reject) =>{
//             setTimeout(()=>{
//                 resolve(1)
//             }, 0)
//         })
//         p1.then((res)=>{
//             console.log(3)
//         })
//         console.log(4)
//         resolve(4)
//     })
// }

// p().then((res)=>{
//     console.log(res)
// })
// console.log("end")


// 参考：https://segmentfault.com/a/1190000022805523


setTimeout(() => {
    console.log('异步1任务time1');
    new Promise(function (resolve, reject) {
        console.log('异步1宏任务promise');
        setTimeout(() => {
            console.log('异步1任务time2');
        }, 0);
        resolve();
    }).then(function () {
        console.log('异步1微任务then')
    })
}, 0);
console.log('主线程宏任务');
setTimeout(() => {
    console.log('异步2任务time2');

}, 0);
new Promise(function (resolve, reject) {
    console.log('宏任务promise');
    // reject();
    resolve();
}).then(function () {
    console.log('微任务then')
}).catch(function () {
    console.log('微任务catch')
})
console.log('主线程宏任务2');
