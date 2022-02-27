String.prototype.repeatify = String.prototype.repeatify || (function(num) {
    let res = '';
    for(let i = 0; i < num; i++) {
        res += this
    }
    return res;
})

const str = "hello"

console.log(str.repeatify(3))