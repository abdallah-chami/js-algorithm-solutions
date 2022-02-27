/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function race(funcs){
    // your code here
    return (callback, data) => {
        let resultFound = false;
        funcs.forEach(fn => {
            fn((error, resData)=> {
                if(!resultFound){
                    resultFound = true;
                    callback(error, resData);
                }
            }, data)
        })
    }
}