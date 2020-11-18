/**
 * 实现compare函数，比较两个参数值是否相等
 * 基本类型:直接用===判断
引用类型:先判断构造函数是否相等,再判断属性以及属性值是否相等,深度遍历此处用到递归
注:对象的属性顺序不知道是否必须一致,此处未考虑
 */

var compare = function (arg1, arg2) {
    if (arg1 === arg2) {
        return true; //基本类型的值全等号就可以判断
    }
    console.log("引用类型", arg1.constructor, arg1)
    if (arg1.constructor !== arg2.constructor) {
        return false;//引用类型的值如果构造函数不同则不相等
    }
    // 引用类型
    for (var p in arg1) {//遍历arg1中的属性
        if (arg1.hasOwnProperty(p)) {
            if (!arg2.hasOwnProperty(p)) {
                return false;//arg2中没有该属性则返回false
            }

            if (arg1[p] === arg2[p]) {
                continue; //有且属性值相等,则进行下一轮判断
            }

            if (typeof( arg1[p] ) !== "object") {
                return false;//两个值不全等也不是引用类型,则不相等
            }
            if (!compare(arg1[p], arg2[p])) {
                return false;//有相同的属性值且是引用类型则递归调用自身
            }
        }
    }

    for (p in arg2) { //反过来判断防止arg1是arg2的子集,保证arg2中的属性都在arg1中
        if (arg2.hasOwnProperty(p) && !arg1.hasOwnProperty(p)) {
            return false;
        }
    }
    return true;
}

var a = [1, '2', {a: 1}];
var b = [1, '2', {a: 1}];
var c = {arr: [1, 2, true, undefined], name: 'haha'};
var d = {name: 'haha', arr: [1, 2, true, undefined]};
var e = {name: 'haha', arr: [1, 2, true, undefined], j: 1};

console.log("res",compare(a, b));//true
console.log("res",compare(c, d));//true
console.log("res",compare(d, e));//false