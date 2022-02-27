class NodeStore {
    /**
     * @param {Node} node
     * @param {any} value
     */

    constructor() {
        this.store = {}
    }

    set(node, value) {
        const sym = Symbol();
        node.storeKey = sym;
        this.store[sym] = value;
    }
    /**
     * @param {Node} node
     * @return {any}
     */
    get(node) {
        return this.store[node.storeKey];
    }

    /**
     * @param {Node} node
     * @return {Boolean}
     */
    has(node) {
        return !!this.store[node.storeKey]
    }
}