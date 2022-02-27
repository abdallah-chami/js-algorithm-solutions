Array.prototype.myMap = function(mapper, thisArg = this) {
    // your code here
    const res = new Array(this.length)
    this.forEach((val, i) => res[i] = (mapper.call(thisArg, val, i , this)))
    return res;
}

