function Foo() {
    getName = function () {
        alert(1);
    };
    debugger
    return this;
}

function getName() {
    alert(5);
}
Foo.getName = function () {
    alert(2);
};
Foo.prototype.getName = function () {
    alert(3);
};
getName = function () {
    alert(4);
};
//请写出以下输出结果：
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();