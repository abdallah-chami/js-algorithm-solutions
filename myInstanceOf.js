
/**
 * @param {any} obj
 * @param {target} target
 * @return {boolean}
 */
function myInstanceOf(obj, target) {
    // your code here

    if(obj == null || typeof obj !== 'object') return false;

    return Object.getPrototypeOf(obj) === target.prototype || myInstanceOf(Object.getPrototypeOf(obj), target)

}