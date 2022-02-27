
/**
 * @param {Array | ArrayLike | Promise | Iterable | Observable} input
 * @return {Observable}
 */
function from(input) {
    // your code here

    if(input instanceof Observable){
        return input;
    }
    else if(input instanceof Promise){
        return new Observable(
            subscriber => input
                    .then( data => subscriber.next(data))
                    .catch(error => subscriber.error(error))
                    .then(()=> subscriber.complete()))
    }
    else if(typeof input[Symbol.iterator] === 'function'){

        return new Observable(
            subscriber => {
                try{
                    for(let val of input) {
                        subscriber.next(val)
                    }
                }
                catch (err){
                    subscriber.error(err)
                }

                subscriber.complete()
            })
    }

    else if(input.length != null){
        return new Observable(
            subscriber => {
                try{
                    for(let i = 0; i < input.length; i++) {
                        subscriber.next(input[i])
                    }
                }
                catch (err){
                    subscriber.error(err)
                }

                subscriber.complete()
            })
    }
    else {
        throw new Error("unsupported type")
    }
}