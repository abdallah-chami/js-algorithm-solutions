/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
    // your code here
    el.css = function (propertyName, value) {
        el.style[propertyName] = value;
        return el;
    }
    return el;
}

// online solution
/**
 * @param {HTMLElement} el - element to be wrapped
 */
function $(el) {
    return new Wrapper(el)
}

class Wrapper {
    constructor(el) {
        this.el = el
    }

    css(propertyName, value) {
        this.el.style[propertyName] = value
        return this
    }
}