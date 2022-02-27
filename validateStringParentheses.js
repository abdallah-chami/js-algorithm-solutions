
/**
 * @param {string} str
 * @return {boolean}
 */
function validate(str) {
    // your code here

    let stack = []

    for(let i = 0; i < str.length; i++) {

        const c = str.charAt(i);

        if(c === ')' && stack.pop() !== '('){
            return false;
        }

        if(c === '}' && stack.pop() !== '{'){
            return false;
        }

        if(c === ']' && stack.pop() !== '['){
            return false;
        }

        if(['(', '{', '['].includes(c)){
            stack.push(c)
        }
    }

    return stack.length === 0;
}

validate("{([])}")