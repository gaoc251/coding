function getPersonInfo (one, two, three) {
    console.log("one", one);
    console.log("two", two);
    console.log("three", three);
}

const person = 'Lyia';
const age = 12;

getPersonInfo`${person} is ${age} years old`
 
// 结果：[ '', ' is ', ' years old' ] Lyia 12
/**
 * 因为使用了模板字符串，第一个参数的值始终字符串值的数组
 * 其余参数为表达式的值
 */