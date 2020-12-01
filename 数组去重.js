/**
 * 数组去重,数组元素为单一类型的字符串或实数
 */

var test = function (array) {
	let obj = {}
	return array.filter((item) => {
        // 防止key重复
        let newItem = item + JSON.stringify(item);
        console.log("newItem",newItem, obj.hasOwnProperty(newItem))
		return obj.hasOwnProperty(newItem) ? false : obj[newItem] = true
	})

}

console.log("数组去重", test([1,2,3,4,7,1, {'name':'caoyan'}, {'name':'caoyan'}]))


/**
 * 1、利用es6的set去重
 */

function unique (arr) {
	return Array.from(new Set(arr))
}

var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique(arr))

/***
 * 2、利用for嵌套for，然后splice去重
 * 同sort方法
 */
function unique1 (arr) {
	for(var i=0; i<arr.length; i++){
		for(var j=i+1; j<arr.length; j++){
			if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
				arr.splice(j,1);
				j--;
			}
		}
	}
    return arr;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique1(arr))


/**
 * 3、利用indexOf
 */

function unique2 (arr) {
	var array = [];
    for (var i = 0; i < arr.length; i++) {
        if (array .indexOf(arr[i]) === -1) {
            array .push(arr[i])
        }
    }
    return array;
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique2(arr))

/**
 * 4、递归去重
 */
function unique4 (arr) {
	var array = arr;
	var len = array.length;
	array.sort(function(a, b) {return a-b})
	function loop (index) {
		if (index >=1) {
			if (array[index] == array[index-1]) {
				array.splice(index,1);
			}
			loop(index-1)
		}
	}
	loop(len-1)
	return array;
}

/**
 * 5、map
 */

function arrayNonRepeatfy(arr) {
	let map = new Map();
	let array = new Array();  // 数组用于返回结果
	for (let i = 0; i < arr.length; i++) {
	  if(map.has(arr[i])) {  // 如果有该key值
		map .set(arr[i], true); 
	  } else { 
		map.set(arr[i], false);   // 如果没有该key值
		array .push(arr[i]);
	  }
	} 
	return array ;
  }
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(arrayNonRepeatfy(arr))

/**
 * 6\利用reduce+includes
 */
function unique6(arr){
    return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]);
}
var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique6(arr));



