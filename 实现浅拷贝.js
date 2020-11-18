var obj = {a:1,arr:[2,3]}

function shallowObjCopy (src) {
    var newobj = {}
    for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
            newobj[prop] = src[prop]
        }
    }
    return newobj
}
console.log("shallowObjCopy", shallowObjCopy(obj))