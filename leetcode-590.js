/**
 * N叉树的后续遍历
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    let res = [];
    const post = (node) => {
        if (node) {
            node.children.forEach(item => {
                post(item)
            })
            res.push(node.val);
        }
    }
    post(root);
    return res;
};