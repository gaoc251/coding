/**
 * 实现function.prototype.bind()
 */

Function.prototype.myBind = function (oThis){

    //局部变量aArgs存储myBind函数的实参
    var aArgs = Array.prototype.slice.call(arguments,1),

    fToBind = this,
    fNOP = function (){},//圣杯模式，用于创建fBound函数原型的中间函数
    fBound = function () {
        return fToBind.apply( 
            (
            //fNOP.prototype在New fBound()构造的实例的原型链上
            this instanceof fNOP && oThis ? this: oThis),

            //拼接myBind函数的实参和硬绑定函数fBound的实参后，传递给目标函数fToBind
            aArgs.concat(Array.prototype.slice.call(arguments)
            ));
         };

    //圣杯模式
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    //fBound.prototype.constructor = fBound;
    //fBound.prototype.uber = this.prototype;
    return fBound;
};

function foo(a,b) {
    this.a = a;
    this.b = b;
}

var obj1 = {};
var baz = foo.myBind(obj1,2);
baz(3);
console.log(obj1);//{a:2,b:3}

var obj2 = new baz(4);//fBound {a:2,b:4}
console.log(obj2);
