var arr = [1,3,4,5,7];
function test (arr) {
    for (var i = 0;i<arr.length;i++) {
        let _index = Math.floor(Math.random() * arr.length);
        let temp = arr[_index];
        arr[_index] = arr[i];
        arr[i] = temp;
    }
    return arr
}
console.log("res", test(arr))

// 是否有交集：碰撞（八个点，公式）
<div class="demo"></div>
<div class="demo1"></div>


// 深拷贝
let newObj = new obj.contructor();
function deepClone(obj) {
    if (!obj) return obj;
    if (typeof obj == "RegExp") {
        return new RegExp(obj)
    }
    for (let key in obj) {
        // 判断对象还是数组,需要判断 [],{}
        if (obj.hasOwnProperty(key)) {
            if (typeof key =='object') {
                deepClone(key)
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj
}

// vue扩展
mixin
指令
插件
全局

卡槽

vue加载速度
SSR & 骨架屏

多页应用

js分离
chunk contentHASH
vue dialog

挂载
js & 模板分离考虑一下

action 异步？？？

doca项目部署


20人
vue, 小程序，PC，h5, app
教育
综合

