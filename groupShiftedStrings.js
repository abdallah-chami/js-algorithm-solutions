/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {

    const getKey = (str) => {

        const diff = str.charCodeAt(0) - 'a'.charCodeAt(0);

        const res = [];

        for(let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i) - diff;

            if(code < 'a'.charCodeAt(0)) {
                code += 26;
            }

            res.push(code);

        }
        return String.fromCharCode(...res);
    }


    const map =  strings.reduce((map, str) => {

        const key = getKey(str);

        if(map.has(key)){
            map.get(key).push(str)
        }
        else{
            map.set(key, [str])
        }

        return map;

    }, new Map())

    return [...map.values()]


};