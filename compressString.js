
/**
 * @param {string} str
 * @return {string}
 */
function compress(str) {
    // your code here
    if(str === "") return ""

    let res = "";
    let prev = null;
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        const current = str.charAt(i);

        if(current !== prev){
            if(prev)
                res += prev + (count > 1 ? count: "")

            count = 0;
        }

        count++;
        prev = current;
    }

    res += prev + (count > 1 ? count: "")

    return res;

}

compress("aaab")