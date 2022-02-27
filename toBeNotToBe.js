/**
 * interface Matcher {
 *  toBe(data: any): void
 * }
 */
/**
 * @param {any} input
 * @returns {Matcher & {not: Matcher}}
 */
function myExpect(input) {
    // your code here
    return {
        toBe: (val) => {if(!Object.is(input, val)) throw new Error()},
        not: {
            toBe: (val) => {if(Object.is(input, val)) throw new Error()}
        }
    }
}