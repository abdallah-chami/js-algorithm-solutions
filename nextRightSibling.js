
/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElemnt | null}
 */
function nextRightSibling(root, target) {
    // your code here
    const queue = [root, null]

    while(!(queue.length === 0)){

        const current = queue.shift()

        if(current === target) return queue.shift()

        if (current === null) queue.push(null);
        else queue.push(...current.children);
    }

    return null;
}


// recursive

/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {HTMLElemnt | null}
 */
function nextRightSibling(root, target) {
    // your code here
    if(!target) return null;

    if(target.nextElementSibling) return target.nextElementSibling;

    let next = target.parentElement;

    while(next){
        next = nextRightSibling(root, next);
        if(next && next.firstElementChild) return next.firstElementChild
    }

    return null;
}