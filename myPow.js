/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {

    if(n < 0) {
        x = 1/x;
        n = -n;
    }

    if(n === 0) return 1;

    if(n === 1) return x;

    const sqrt = myPow(x, Math.floor(n/2));

    if(n % 2 === 1){
        return x * sqrt * sqrt;
    }

    return sqrt * sqrt;

};