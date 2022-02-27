/**
 * @param {any} input
 * @return {(observable: Observable) => Observable}
 * returns a function which trasnform Observable
 */
function map(transform) {
    // your code here
    return (observable) => {
        return new Observable(subscriber => {
            observable.subscribe({
                next: (value) => subscriber.next(transform(value)),
                error: (err) => subscriber.error(err),
                complete: () => subscriber.complete
            })
        })

    }
}