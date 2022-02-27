
/**
 * @param {any[]} items
 * @param {number} size
 * @returns {any[][]}
 */
function chunk(items, size) {
    // your code here

    if(size === 0) return []

    let res = []
    let currentChunk = []

    items.forEach(item => {
        if(currentChunk.length === size){
            res.push(currentChunk);
            currentChunk = []
        }

        currentChunk.push(item)
    })

    if(currentChunk.length > 0) res.push(currentChunk);
    return res;
}