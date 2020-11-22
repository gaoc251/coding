const obj = {1:'a', 2:'b', 3:'c'}
const set = new Set([1,2,3,4])
console.log('A', obj.hasOwnProperty('1'));
console.log('B', obj.hasOwnProperty(1));
console.log('C', set.has('1'));
console.log('D', set.has(1));

/**
 * 对象键都是字符串
 */