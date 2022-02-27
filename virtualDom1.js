/**
 * @param {HTMLElement}
 * @return {object} object literal presentation
 */
function virtualize(element) {
    // your code here

    if(element instanceof Text){
        return element.textContent;
    }

    const obj = {
        type: element.tagName.toLowerCase(),
        props: {}
    };

    Array.from(element.attributes).forEach(a => {
        if (a.name !== 'class' ) obj.props[a.name] = a.value;
    });

    if(element.className) obj.props.className = element.className;

    if(element.childElementCount > 0) {
        obj.props.children = [];
        Array.from(element.childNodes).forEach(ch => obj.props.children.push(virtualize(ch)));
    }
    else if(element.innerText) {
        obj.props.children = element.innerText;
    }

    return obj;
}


/**
 * @param {object} valid object literal presentation
 * @return {HTMLElement}
 */
function render(obj) {
    // your code here
    if(typeof obj === 'string') return document.createTextNode(obj)

    const root = document.createElement(obj.type);

    if(obj.props) Object.keys(obj.props).filter(k => k !== 'children' && k !== 'className').forEach(k => root.setAttribute(k, obj.props[k]));

    if(obj.props.className) root.className = obj.props.className;

    if(typeof obj.props?.children == 'string'){
        root.innerText = obj.props.children;
    }
    else {
        obj.props?.children.forEach(child => root.append(render(child)));
    }

    return root;
}