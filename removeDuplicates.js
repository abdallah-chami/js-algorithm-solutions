
/**
 * @param {any[]} arr
 */
function deduplicate(arr) {
    // your code here
    const set = new Set();

    for(let i = 0; i < arr.length; i++) {
        if(set.has(arr[i])){
            arr.splice(i, 1);
            i--;
        }
        else {
            set.add(arr[i])
        }
    }
}