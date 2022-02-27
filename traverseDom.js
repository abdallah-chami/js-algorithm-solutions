
/**
 * @param {HTMLElement | null} root
 * @return {HTMLElement[]}
 */
function flatten(root) {
    // your code here

    if(!root) return []

    let queue = [root]

    let res = []

    while(!(queue.length === 0)){

        const node = queue.shift();

        queue.push(...node.children)

        res.push(node);

    }


    return res
}