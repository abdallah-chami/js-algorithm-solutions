class Observable {

    constructor(setup) {
        this.setup = setup;
    }

    subscribe(subscriber) {

        const observer = new Observer(subscriber);

        this.setup(observer);

        return {
            unsubscribe: () => observer.isComplete = true
        }
    }
}

class Observer {
    constructor(setup) {
        if(setup instanceof Function){
            this.setup = {next: setup}
        }
        else {
            this.setup = setup;
        }
        this.isComplete = false;
    }

    next(...args) {
        if(!this.isComplete){
            if(this.setup.next) return this.setup.next(...args);
        }
    }

    error(...args) {
        if(!this.isComplete){
            this.isComplete = true;
            if(this.setup.error) return this.setup.error(...args);
        }
    }

    complete(...args) {
        if(!this.isComplete){
            this.isComplete = true;
            if(this.setup.complete) return this.setup.complete(...args);
        }

    }
}