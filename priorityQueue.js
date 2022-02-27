// complete the implementation
class PriorityQueue {
    /**
     * @param {(a: any, b: any) => -1 | 0 | 1} compare -
     * compare function, similar to parameter of Array.prototype.sort
     */
    constructor(compare) {
        this.compare = compare;
        this.queue = [];
    }

    /**
     * return {number} amount of items
     */
    size() {
        return this.queue.length;
    }

    /**
     * returns the head element
     */
    peek() {
        return this.queue[0];
    }

    /**
     * @param {any} element - new element to add
     */
    add(element) {
        this.queue.push(element);
        this.queue.sort(this.compare)
    }

    /**
     * remove the head element
     * @return {any} the head element
     */
    poll() {
        return this.queue.shift();
    }
}