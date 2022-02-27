
/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} target
 */
const findCorrespondingNode = (rootA, rootB, target) => {
    // your code here
    let path = [];
    let currentNode = target;

    while(currentNode !== rootA){
        path.push(Array.from(currentNode.parentElement.children).indexOf(currentNode));
        currentNode = currentNode.parentElement;
    }

    return path.reduceRight((node, index) => node.children.item(index), rootB)
}

// recursive

const findCorrespondingNode = (rootA, rootB, target) => {

    if(rootA == target){
        return rootB;
    }

    for(let i = 0; i < rootA.children.length; i++){
        const res = findCorrespondingNode(rootA.children[i], rootB.children[i], target)
        if(res){
            return res;
        }
    }
}

// dfs iter

//Approach 2: Iterative DFS: Using stack
const findCorrespondingNode = (rootA, rootB, target) => {
    const stack = [[rootA, rootB]];

    while(stack.length > 0) {
        const [leftNode, rightNode] = stack.pop();
        if (leftNode === target) return rightNode;

        for (let i = 0; i < leftNode.children.length; i++) {
            stack.push([leftNode.children[i], rightNode.children[i]]);
        }
    }
}

/**
 * Approach 3: Iterative BFS: Using Queue
 */
const findCorrespondingNode = (rootA, rootB, target) => {
    if (rootA === target) {
        return rootB;
    }

    const queueA = [rootA];
    const queueB = [rootB];

    while(queueA.length) {
        // removes the first element from an array and returns that removed element
        const currentElementA = queueA.shift();
        const currentElementB = queueB.shift();

        if (currentElementA === target) {
            return currentElementB;
        }
        // adds one or more elements to the end of an array and returns the new length of the array.
        queueA.push(...currentElementA.children);
        queueB.push(...currentElementB.children);
    }
    return null;
}

/**
 * Approach 5: Using Tree Walker API
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/createTreeWalker
 */
const findCorrespondingNode = (rootA, rootB, target) => {
    const rootAWalker = document.createTreeWalker(rootA, NodeFilter.SHOW_ELEMENT);
    const rootBWalker = document.createTreeWalker(rootB, NodeFilter.SHOW_ELEMENT);

    let currentNodes = [rootAWalker.currentNode, rootBWalker.currentNode];

    while (currentNodes[0] !== target) {
        currentNodes = [rootAWalker.nextNode(), rootBWalker.nextNode()];
    }

    return currentNodes[1];
}