/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
    // your code here

    return function curried(...args) {

        if(args.length >= fn.length && !args.slice(0, fn.length).includes(curry.placeholder)){
            return fn(...args);
        }
        else {
            return (...args2) => {

                const newArgs = args.map(arg => arg === curry.placeholder && args2.length ? args2.shift(): arg).concat(args2);

                return curried(...newArgs);
            }
        }

    }

}

curry.placeholder = Symbol()
