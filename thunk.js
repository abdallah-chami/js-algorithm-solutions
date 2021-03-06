
/**
 * @param {Thunk} thunk
 * @return {Thunk}
 */
function flattenThunk(thunk) {
    // your code here

    return (callback) => {

        thunk((error, data) => {
            if(typeof data === 'function'){
                flattenThunk(data)(callback)
            }
            else {
                callback(error, data);
            }
        })

    }
}

const func1 = (cb) => {
    setTimeout(() => cb(null, 'ok'), 10)
}

const func2 = (cb) => {
    setTimeout(() => cb(null, func1), 10)
}

const func3 = (cb) => {
    setTimeout(() => cb(null, func2), 10)
}

flattenThunk(func3)((error, data) => {
    console.log(data) // 'ok'
})