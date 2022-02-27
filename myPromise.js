class MyPromise {
    constructor(executor) {
        // your code here
        this.executor = executor;
        this.resolvers = [];
        this.rejectors = [];

        try {
            setTimeout(()=> this.executor((...args) => this.runResolvers.call(this, ...args), (...args) => this.runRejectors.call(this, ...args)), 0)
        }
        catch(err) {
            console.log(err)
        }
    }

    then(onFulfilled, onRejected) {
        // your code here
        if(onFulfilled) this.resolvers.push(onFulfilled);
        if(onRejected) this.rejectors.push(onRejected);
        return this;
    }

    catch(onRejected) {
        // your code here
        if(onRejected) this.rejectors.push(onRejected);
        return this;
    }

    static resolve(value) {
        // your code here
        return new MyPromise((resolve, reject) => resolve(value));
    }

    static reject(value) {
        // your code here
        return new MyPromise((resolve, reject) => reject(value));
    }

    runResolvers(value) {
        this.resolvers.forEach(resolver => resolver(value))
    }

    runRejectors(error) {
        this.rejectors.forEach(rejector => rejector(error))
    }
}