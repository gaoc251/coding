var func = function(x,index,str){
    return index == 0 ? str : func(x, --index, (str +=" " + x[index]));
    } 
var arr = 'abcdw'
var arr3 = func(arr, arr.length, ""); 
console.log("arrs", arr3)

var func1 = function(x,index, str){
    if (index === 0) {
        return str
    } else {
        index = index -1;
        str = str + x[index]
        return func1(x, index, str)
    }
}
var arr = 'abcdw'
var arr3 = func1(arr, arr.length, ""); 
console.log("arrs1", arr3)