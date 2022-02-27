/**
 * @param {HTMLElement} root
 * @param {(el: HTMLElement) => boolean} predicate
 * @param {(e: Event) => void} handler
 */
function onClick(root, predicate, handler) {
    // your code here

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT)

    let node = root;

    while(node) {
        if(predicate(node)){
            node.addEventListener('click', handler)
        }

        node = walker.nextNode();
    }
}