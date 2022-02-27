/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {

    let result = path
        .split("/")
        .filter(dir => dir !== "")
        .reduce( (res, dir) => {
            if(dir === '..')
                res.pop();
            else if(dir !== '.')
                res.push(dir)

            return res;
            } , [])
        .join("/")

    return "/" + result;
};