/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */
function flat(arr, depth = 1) {
    // your imeplementation here

    let res = Array(...arr);

    while(depth > 0) {

        res = res.reduce( (acc, el) => Array.isArray(el)? acc.concat(el): acc.concat([el]) , [])

        if(!res.some(Array.isArray)) return res;

        depth--;
    }

    return res;

}