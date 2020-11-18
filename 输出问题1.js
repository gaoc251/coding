// function sayHI() {
//     console.log("name", name)
//     console.log("age", age)
//     var name = "Lydia";
//     let age = 21
// }
// sayHI();
// undefined, referenceError

// var 存在变量提升，打印name时，只提升声明，值为undefined
// let 打印时，是不可访问的，暂时性死区，就会报错
// （个人观点：var 是创建被提升，真正赋值没有被提升，let是不存在变量提升的）

let name = "xxxxxx"
{
    console.log(name);
    let name = "coed"
}

// ReferenceError: name is not defined

// let 也存在变量提升
// 变量的赋值存在三个阶段
// 1、创建变量，在内存中开辟空间
// 2、初始化变量，将变量初始化为undefined
// 3、真正赋值

/**
 * let 创建被提升，赋值没有被提升
 * var 创建和赋值都被提升
 * function 创建，赋值，初始化都被提升
 */