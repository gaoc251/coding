const a= {}
const b = {key: 'b'}
const c = {key: 'c'}
a[b] = 123
a[c] = 456

console.log("res", a[b]);

/**
 * b传进去的时，是一个对象
 */