/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
    // your imeplementation here
    if(!depth) return arr;
    return arr.reduce((res, x) => Array.isArray(x)? res.concat(flat(x, depth - 1)): res.concat([x]) ,[]);

}