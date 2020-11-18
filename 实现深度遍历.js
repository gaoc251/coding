// one
let deepTraversal1 = (node, nodeList =[]) => {
    if (node !== null) {
        nodeList.push(node)
        let children = node.children;
        for (let i=0;i<children.length;i++) {
            deepTraversal1(children[i], nodeList)
        }
    }
    return nodeList
}

// two
let deepTraversal2 = (node) => {
    let nodes = [];
    if (node !== null) {
        nodes.push(node);
        let children = node.children
        for(let i=0;i<children.length;i++) {
            nodes = nodes.concat(deepTraversal2(children[i]))
        }
    }
    return nodes
}

// three:非递归
let deepTraversal3 = (node) => {
    let stack = [];
    let nodes = [];
    if (node) {
        // 推入当前处理的node
        stack.push(node);
        while (stack.length) {
            let item = stack.pop();
            let children = item.children;
            nodes.push(item);
            for (let i = children.length; i>= 0; i--) {
                stack.push(children[i])
            }
        }
    }
    return nodes
}
