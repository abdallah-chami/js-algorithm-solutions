/**
 * @param {number} num
 */
function sum(num) {
    const func = function(num2) { // #4
        return num2 ? sum(num+num2) : num; // #3
    }

    func.valueOf = () => num; // #2
    return func; // #1
}

/**
 * @param {number} num
 */
function sum(a) {
    const fn = (b) => sum(a + b);
    fn[Symbol.toPrimitive] = () => a;
    return fn;
}