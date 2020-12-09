/**
 * 验证二叉搜索树
 * https://leetcode-cn.com/problems/validate-binary-search-tree/
 */
var isValidBST = function(root) {
    let res = []
    const inorder = (node) => {
        if (node) {
            inorder(node.left);
            res.push(node.val);
            inorder(node.right);
        }
    }
    inorder(root);
    for (let i=0;i<res.length-1;i++) {
        if (res[i]>=res[i+1]) {
            return false
        }
    }
    return true
};