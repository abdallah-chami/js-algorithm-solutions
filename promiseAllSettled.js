
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
    // your code here
    return new Promise((resolve, reject) => {
        if(promises.length === 0) resolve([]);

        let result = new Array(promises.length)
        let promiseResCount = 0;

        promises.forEach((p,i) => Promise.resolve(p).then(res => handleResult(res, i), err => handleError(err, i)))

        const handleResult = (res,i) => {
            result[i] = {status: 'fulfilled', value: res};

            promiseResCount++;
            if(promiseResCount === promises.length)
                resolve(result)
        }

        const handleError = (err, i) => {
            result[i] = {status: 'rejected', reason: err};

            promiseResCount++;
            if(promiseResCount === promises.length)
                resolve(result)
        }
    })
}

