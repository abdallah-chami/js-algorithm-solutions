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
 * @return {number[][]}
 */
var verticalOrder = function(root) {

    let res = []

    let queue = [[root, 0]]

    let offset = 0;

    while(!(queue.length === 0)) {

        const [node, pos] = queue.shift();

        if(node === null) continue;

        if(pos + offset < 0) {
            res.unshift([node.val])
            offset++;
        }
        else if (pos + offset > (res.length - 1)){
            res.push([node.val])
        }
        else {
            res[pos + offset].push(node.val)
        }

        if(node.left) queue.push([node.left, pos - 1])
        if(node.right) queue.push([node.right, pos + 1])
    }


    return res;
};