/**
 * Object.defineProperty
 */

// observer 观察者
function observer (obj) {
    if ( obj && typeof obj === 'object') {
        for (let key in obj) {
            // hasOwnProperty 也就是，是否有指定的键
            if (!obj.hasOwnProperty(key)) break;
            defineReactive(obj, key, obj[key]);
        }
    }
}

function defineReactive (obj, key, value) {
    observer(value);
    // Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
    // 这样的话，就给这个对象的某个值进行赋值，就会触发set，那么就会监听了数据的变化
    Object.defineProperty(obj, key, {
        get () {
            return value;
        },
        set (newValue) {
            observer(newValue)
            if (value === newValue) return;
            value = newValue
        }
    })
}

function $set (data, key, value) {
    defineReactive(data, key,value)
}

/**
 * Vue 主要通过以下 4 个步骤来实现数据双向绑定的：实现一个监听器 Observer：对数据对象进行遍历，包括子属性对象的属性，利用 Object.defineProperty() 对属性都加上 setter 和 getter。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。
实现一个解析器 Compile：解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。
实现一个订阅者 Watcher：Watcher 订阅者是 Observer 和 Compile 之间通信的桥梁 ，主要的任务是订阅 Observer 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。
实现一个订阅器 Dep：订阅器采用 发布-订阅 设计模式，用来收集订阅者 Watcher，对监听器 Observer 和 订阅者 Watcher 进行统一管理。
 */


// vue3.0采用proxy实现数据双向绑定
const proxy = new Proxy(data, {
    // get 陷阱
    get (target, key, receiver) {
        try {
            console.log("read data property:" + key)
            if(!(key in target)) {
                throw new Error('属性不存在哦')
            }
            return Reflect.get(target, key, receiver)
        } catch {
            console.error(error)
        }
    },
    // set陷阱
    set (target, key, value, receiver) {
        try {
            console.log("set data property", key)
            return Reflect.set(target, key, value, receiver)
        } catch {
            console.log("e", e)
        }
    }
})
// reflect 是内置的一个对象，他提供了js的拦截。不是构造函数，不能通过new运算符对其进行调用



/**
 * object.defineproperty的缺陷
 * 1、无法监听数组的变化。vue可以，是因为通过push,pop,shift,unshift,splice,sort,reverse。vm.items[indexOfItem]=newValue 是检测不到的。
 * 2、只能劫持对象的属性，需要对每一个对象的每个属性进行遍历，如果属性值也是对象就需要深度遍历
 */

/**
 * proxy
 * 1、可以直接监听对象而非属性
 * 2、可以直接监听数组的变化
 * 3、返回新对象，我们可以只操作新的对象达到目的，而defineproperty只能遍历对象属性直接修改
 */