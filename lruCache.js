/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {

    let val = this.cache.get(key);

    if(val != null){
        this.cache.delete(key);
        this.cache.set(key, val);
        return val
    }
    else
        return -1;

};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    this.cache.delete(key);
    this.cache.set(key, value);

    if(this.cache.size > this.capacity){
        const first = this.cache.keys().next().value;
        this.cache.delete(first);
    }

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */