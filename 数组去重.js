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