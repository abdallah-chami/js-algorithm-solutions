// For a recursive description of DOM elements i.e.
const dom = {
    type: 'div',
    props: { id: 'hello', children: [{ type: 'h1', children: 'HELLO' }] },
};

// Define a function that prepares a actual dom elements.

// https://leetcode.com/discuss/interview-question/1681654/Facebook-or-Frontend-Engineer-or-OA-or-USA

function buildDom(root) {
    const element = document.createElement(root.type);
    if (root.children) { // assume it will be text only
        element.innerText = root.children;
    } else {
        for (let key in root.props) {
            if (key === "children") {
                for (let ch of root.props[key]) {
                    element.append(buildDom(ch));
                }
            } else {
                element[key] = root.props[key];
            }
        }
    }
    return element;
}

let root = buildDom(dom);
document.body.append(root);