// es5
function a() {
    this.name = 'a';
}
a.prototype.getName = function getName () {
    return this.name
}

function b () {
    b.prototype = new a();
}
console.log(b.prototype.__proto__)
console.log(a.prototype)
console.log(b.__proto__)
console.log(b.prototype)

// es6
class A {
    constructor(a) {
        this.name = a
    }
    getName () {
        return this.name;
    }
}

class B extends A {
    constructor(){
        super()
    }
}

console.log(B.prototype.__proto__)
console.log(A.prototype)
console.log(B.__proto__)
console.log(B.prototype)