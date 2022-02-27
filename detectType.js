/**
 * @param {any} data
 * @return {string}
 */
function detectType(data) {
    // your code here

    const stringified = Object.prototype.toString.call(data);

    const type = stringified.split(' ')[1].slice(0, -1);

    return type.toLowerCase();
}