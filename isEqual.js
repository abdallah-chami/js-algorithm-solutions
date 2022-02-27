/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */

function isEqual(a, b, path = []) {
    // your code here
    if(path.some(x => (x.a === a && x.b === b) || (x.a === b && x.b === a))) return true;
    const newPath = [...path, {a,b}]

    if(a === b) return true;

    if(Array.isArray(a) && Array.isArray(b)){
        return a.length === b.length && a.every((val, i) => isEqual(val, b[i], newPath))
    }

    if(typeof a === 'object' && typeof b === 'object'){
        const aKV = Object.keys(a).map(k => [k, a[k]])
        const bKV = Object.keys(b).map(k => [k, b[k]])

        return isEqual(aKV, bKV, newPath);
    }

    return a === b;
}