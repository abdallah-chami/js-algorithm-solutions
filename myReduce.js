Array.prototype.myReduce = function (callback, initialValue) {
    // your code here

    let start = 0;
    let acc = initialValue;

    if(arguments.length === 1){
        if(this.length === 0) throw new Error("cannot reduce empty array")
        acc = this[0];
        start = 1
    }

    for(let i = start; i < this.length; i++)
        acc = callback(acc, this[i], i, this)

    return acc;

}