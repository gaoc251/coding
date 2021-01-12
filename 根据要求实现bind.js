function fun1(a,b){
    console.log(this.name,a+b);
}

function bind(fun, ctx){
    let bindFun =  function () {
        var bindArgs = Array.prototype.slice.call(arguments); // 获取返回的函数传入的参数
        fun.apply(ctx, bindArgs)  //使用apply修改this的指向s
    }
    return bindFun
}

const fun2 = bind(fun1,{name:'测试：'});
fun2(1,2);//测试，3