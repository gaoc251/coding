let a = 3
let b = new Number(3)
let c = 3;

console.log("A", a==b) 
console.log("B", a===b)
console.log("C", c===b)

// true  false false

// new出来的是对象不能全等