
/**
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

**/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function sequence(funcs){
    // your code here

    return (callback, data) => {

        if(funcs.length === 0) return callback(undefined, data);

        funcs.shift()((error, newData) => error? callback(error, undefined) :sequence(funcs)(callback, newData) , data);

    }
}