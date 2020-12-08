/**
 * N叉树的前序遍历
 */
var preorder = function (root) {
    let res = [];
    const pre = (node) => {
        if (node) {
            res.push(node.val);
            node.children.forEach(child => {
                pre(child)
            })
        }
    }
    pre(root);
    return res;
}