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
function parallel(funcs){
    // your code here
    return (callback, data) => {

        let results = new Array(funcs.length)
        let errorDetected = false;

        for(let i = 0; i < funcs.length; i++){
            funcs[i]((error, resData) => {
                    if(errorDetected) return;

                    if(error){
                        callback(error, undefined);
                        errorDetected = true;
                    }

                    else {
                        results[i] = resData;
                        if(!results.includes(undefined)) callback(undefined, results);
                    }
                }
                ,data)
        }

    }
}