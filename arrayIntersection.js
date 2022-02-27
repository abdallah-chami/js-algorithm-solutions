/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */
function getIntersection(arr1, arr2) {
    // your code here
    const set = new Set(arr1);
    const res = new Set();

    arr2.forEach(el => {if(set.has(el)) res.add(el)})

    return [...res]
}
