// You can use Observer which is bundled to your code

// class Observer {
//   // subscriber could one next function or a handler object {next, error, complete}
//   constructor(subscriber) { }
//   next(value) { }
//   error(error) { }
//   complete() {}
// }


class Subject {
    constructor() {
        this.observers = new Set()
    }

    subscribe(subscriber) {

        const observer = new Observer(subscriber);

        this.observers.add(observer)

        return {
            unsubscribe: () => this.observers.delete(observer)
        }
    }

    next = (value) => {
        this.observers.forEach(s => s.next(value))
    }

    error = (err) => {
        this.observers.forEach(s => s.error(err))
    }

    complete = () => {
        this.observers.forEach(s => s.complete())
    }
}