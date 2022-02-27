// please complete the implementation
class EventEmitter {
    constructor(){
        this.subscriptions = new Map();
    }

    subscribe(eventName, callback) {
        if (!this.subscriptions.has(eventName)) {
            this.subscriptions.set(eventName, new Set());
        }

        const sub = new Subscription(callback, sub => () => this.subscriptions.get(eventName)?.delete(sub));
        this.subscriptions.get(eventName).add(sub);
        return sub;
    }

    emit(eventName, ...args) {
        this.subscriptions.get(eventName)?.forEach(sub => sub.callback(...args));
    }
}

class Subscription {

    constructor(callback, releaseBuilder){
        this.callback = callback;
        this.release = releaseBuilder(this);
    }

}