
Function.prototype.mycall = function(thisArg, ...args) {
    // your code here
    thisArg = Object( thisArg || window )
    const sym = Symbol();
    thisArg[sym] = this;
    const res = thisArg[sym](...args)
    delete thisArg[sym]
    return res

}