/**
 * @param {Array<(arg: any) => any>} funcs
 * @return {(arg: any) => any}
 */
function pipe(funcs) {
    // your code here

    return (x) => {

        if(funcs.length === 0) return x;

        return pipe(funcs)(funcs.shift()(x));

    }

}

