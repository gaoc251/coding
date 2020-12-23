/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isValidBST = function(root) {
//     let res=[]
//     const inorder = (node) => {
//         if (node) {
//             inorder(node.left);
//             res.push(node.val);
//             inorder(node.right);
//         }
//     }
//     inorder(root)
//     for (let i=0;i<res.length-1;i++) {
//         if (res[i]>=res[i+1]) {
//             return false
//         }
//     }
//     return true
// };
var isValidBST = function(root) {
    let stack = [];
    let inorder = -Infinity;

    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        // 如果中序遍历得到的节点的值小于等于前一个 inorder，说明不是二叉搜索树
        if (root.val <= inorder) {
            return false;
        }
        inorder = root.val;
        root = root.right;
    }
    return true;
};

// const helper = (root, lower, upper) => {
//     if (root === null) {
//         return true;
//     }
//     if (root.val <= lower || root.val >= upper) {
//         return false;
//     }
//     return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
// }
// var isValidBST = function(root) {
//     return helper(root, -Infinity, Infinity);
// };

// @lc code=end

// 二叉搜索树是查找树，左子树小于根节点，右子树大于根节点

/**
 * 二叉树排序树，中序遍历是升序的
 * 
 * 解法：
 * 1、中序遍历：升序
 * 2、递归（...,min, max）
 *      递归左孩子 最大值
 *      递归右孩子 最小值
 *      max < root, min > root
 *      递归
 */