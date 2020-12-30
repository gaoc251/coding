/**
 * prototype  proto   constructor
 */

/**
 * prototype 
函数才有的属性，对象没有。函数的prototype会指向一个带有constructor的对象
 */

/**
 * proto 
 * 函数的_proto_要追溯到原生Function对象，即函数的_proto_等于Function的prototype
 * 由于函数声明其实是a=function()
 * 对象的_proto_即被实例化的函数prototype字面量的话
 * let obj = {}
 * obj.proto则为是Object.prototype
 */

/**
 * constructor
 * 对象的constructor指向被实例化的函数
 */

/**
 * 原型链：即从实例化对象到函数原型逐层查找的过程。prototype（原型）
 */