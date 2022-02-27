/**
 * @param {Function} func
 * @return {Function}
 */
function once(func) {
    // your code here
    let val = undefined;
    let valCalculated = false;

    return function(...args) {
        if(!valCalculated) {
            val = func.apply(this, args);
            valCalculated = true;
        }

        return val;
    }
}