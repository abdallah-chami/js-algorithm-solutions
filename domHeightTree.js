/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
    // your code here
    if(!tree) return 0;

    return Math.max(0, ...(Array.from(tree.children).map(getHeight))) + 1;
}