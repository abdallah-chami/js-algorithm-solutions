/**
 * MyElement is the type your implementation supports
 *
 * type MyNode = MyElement | string
 */

/**
 * @param { string } type - valid HTML tag name
 * @param { object } [props] - properties.
 * @param { ...MyNode} [children] - elements as rest arguments
 * @return { MyElement }
 */
function createElement(type, props, ...children) {
    // your code here

    return {
        type,
        props: props,
        children: children
    }
}


/**
 * @param { MyElement }
 * @returns { HTMLElement }
 */
function render(myElement) {
    // your code here

    if(typeof myElement === 'string'){
        return document.createTextNode(myElement)
    }

    const el = document.createElement(myElement.type);

    for(let k of Object.keys(myElement.props)){
        el[k] = myElement.props[k];
    }

    myElement.children.forEach(child => el.append(render(child)))

    return el;

}