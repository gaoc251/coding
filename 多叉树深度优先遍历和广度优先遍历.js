var root = {
    name: 'A',
    children: [{
            name: 'B1',
            children: [{
                name: 'C1',
                children: [{
                    name: 'D',
                    children: [{
                            name: 'D1',
                            children: [{
                                name: 'F1 '
                            }, {
                                name: 'F2'
                            }]
                        },
                        {
                            name: 'D2'
                        }
                    ]
                }]
            }]
        },
        {
            name: 'B2',
            children: [{
                name: 'C2'
            }, {
                name: 'C3'
            }]
        }
    ]
}

// 深度优先遍历（递归）----前序遍历
let arr = []; // 存放遍历得到的‘name’的值
function traverseTree (node) {
    if (!node) {return}
    arr.push(node.name);
    if (node.children && node.children.length > 0) {
        node.children.map(item => traverseTree(item))
    }
    return arr
}
console.log("深度优先遍历-递归", traverseTree(root))

// 深度优先遍历（非递归） --- 前序遍历
function traverseTree2 (node) {
    if (!node) {return}
    let stack = [] // 用于存放所有待处理的节点
    let arr = [] // 存放遍历后的节点
    let tmpNode ; // 正在处理的节点
    stack.push(node)
    while (stack.length) {
        tmpNode = stack.shift()
        arr.push(tmpNode.name)
        if (tmpNode.children && tmpNode.children.length) {
            tmpNode.children.reverse().map(item => stack.unshift(item))
        }
    }
    return arr
}
console.log("深度优先遍历-非递归", traverseTree2(root))


// 广度优先（非递归）---- 按层遍历
function traverseTree3 (node) {
    if (!node) {return}
    let stack = [] // 用于存放所有待处理的节点
    let arr = [] // 存放遍历后的节点
    let tmpNode ; // 正在处理的节点
    stack.push(node)
    while (stack.length) {
        tmpNode = stack.shift()
        arr.push(tmpNode.name)
        if (tmpNode.children && tmpNode.children.length) {
            tmpNode.children.map(item => stack.push(item))
        }
    }
    return arr
}
console.log("深度优先遍历-非递归", traverseTree3(root))
