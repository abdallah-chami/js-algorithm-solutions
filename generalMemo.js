/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
function memo(func, resolver) {
    // your code here
    const cache = new Map();

    return function() {
        const cacheKey = resolver ?  resolver(...arguments) : Array.from(arguments).join(',');

        if(!cache.has(cacheKey)){
            cache.set(cacheKey, new Map());
        }

        const contextMap = cache.get(cacheKey);

        if (contextMap.has(this)) {
            return contextMap.get(this);
        }

        const value = func.apply(this, arguments);
        contextMap.set(this, value);
        return value;
    }
}