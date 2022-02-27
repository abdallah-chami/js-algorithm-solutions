
/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function completeAssign(target, ...sources) {
    if (target == null) throw Error('target cannot be null or undefined');
    target = Object(target);

    for(let source of sources) {
        if (source == null) continue;

        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    }
    return target;
}