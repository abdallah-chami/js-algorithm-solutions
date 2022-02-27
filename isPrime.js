/**
 * @param {number} num - positive integer
 */
function isPrime(num) {
    // your code here
    for(let index = 2; index <= Math.sqrt(num); index++) if(num%index === 0) return false;
    return num === 1 ? false : true;
}