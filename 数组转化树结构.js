var obj=[
    {id:1,name:'a',parent:null},
    {id:3,name:'b',parent:2},
    {id:2,name:'c',parent:1},
    {id:4,name:'a',parent:3}
]

obj.sort((a,b) => {return a.id-b.id})
function Node (objs, child) {
    this.id = objs.id
    this.name = objs.name
    this.parent = objs.parent
    child?this.child = child:''
}

function fn(i) {
    if (i>=obj.length) return
    return new Node(obj[i], fn(++i))
}

let result = fn(0)
console.log("res", result)
