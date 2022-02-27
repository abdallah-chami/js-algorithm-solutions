
/**
 * @param {string} str
 * @return {string}
 */
function smallestUniqueSubstr(str) {
    // your code here

    let stack = [];
    for(let i = 0; i < str.length; i++){
        if(stack.includes(str[i])) continue;
        while(stack[stack.length-1]>str[i] && str.substring(i).includes(stack[stack.length-1])) stack.pop();
        stack.push(str[i]);
    }
    return stack.join("");
}