
/**
 * @param {HTMLElement} tree
 * @return {string[]}
 */
function getTags(tree) {
    // your code here
    const tagSet = new Set();
    const walker = document.createTreeWalker(tree, NodeFilter.SHOW_ELEMENT);
    let node = tree;
    while(node){
        tagSet.add(node.tagName.toLowerCase());
        node = walker.nextNode()
    }
    return Array.from(tagSet)
}