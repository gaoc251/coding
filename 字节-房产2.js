/**
 * 2、写一个按照下面两种方式都能正常调用的 sum 方法
 * console.log(sum(2,3)); //  5
 * console.log(sum(2)(3)); //  5
 */

function sum(){
    var num = arguments[0];
    if(arguments.length==1){
        return function(sec){
            return num+sec;
        }
    }else{
        var num = 0;
        for(var i = 0;i<arguments.length;i++){
            num = num + arguments[i];
        }
        return num;
    }
}
console.log(sum(2,3)); //  5
console.log(sum(2)(3)); //  5