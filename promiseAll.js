
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
    // your code here

    return new Promise((resolve, reject) => {
        if(promises.length === 0) resolve([]);

        let result = new Array(promises.length)
        let promiseResCount = 0;

        promises.forEach((p,i) => {
            Promise.resolve(p)
                .then(res => {
                    result[i] = res;
                    promiseResCount++;
                    if(promiseResCount === promises.length)
                        resolve(result)
                })
                .catch(error => reject(error))
        })
    })
}