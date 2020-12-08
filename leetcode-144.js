/**
 * 二叉树的前序遍历
 */

var preorderTraversal = function(root) {
    let res = [];
    const preorder = () => {
        if (!root) {
            res.push(root.val);
            preorder(root.left);
            preorder(root.right);
        }
    }
    preorder(root)
    return res;
};