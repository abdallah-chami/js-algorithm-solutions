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
 * @return {number[]}
 */
var rightSideView = function(root) {

    let queue = [root, null];

    let res = [];
    let prev = null;

    while(!(queue.length === 0)){
        let current = queue.shift();

        if(current == null){
            if(prev != null){
                res.push(prev.val)
                queue.push(null)
            }
            else break;
        }
        else {
            if(current.left) queue.push(current.left)
            if(current.right) queue.push(current.right)
        }

        prev = current;
    }

    return res;
};