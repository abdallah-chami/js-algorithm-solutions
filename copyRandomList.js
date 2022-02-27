/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {

    if(!head) return null;

    const nodeMap = new Map();

    let node = head;
    let clone = new Node(head.val, null, null)

    nodeMap.set(node, clone);

    while(node.next) {
        clone.next = new Node(node.next.val, null, null)
        clone = clone.next;
        node = node.next;
        nodeMap.set(node, clone);
    }

    for(let [o, c] of nodeMap.entries()){
        c.random = nodeMap.get(o.random)
    }

    return nodeMap.get(head)

};