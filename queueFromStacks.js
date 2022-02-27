/* you can use this Class which is bundled together with your code

class Stack {
  push(element) { // add element to stack }
  peek() { // get the top element }
  pop() { // remove the top element}
  size() { // count of element }
}
*/

/* Array is disabled in your code */

// you need to complete the following Class
class Queue {
    constructor() {
        this.pushStack = new Stack()
        this.popStack = new Stack()
    }

    enqueue(element) {
        this.pushStack.push(element)
    }

    _move() {
        while (this.pushStack.size() > 0) {
            this.popStack.push(this.pushStack.pop())
        }
    }

    peek() {
        if (this.popStack.size() > 0) {
            return this.popStack.peek()
        }

        if (this.pushStack.size() > 0) {
            this._move()
            return this.popStack.peek()
        }

        return undefined
    }

    size() {
        return this.pushStack.size() + this.popStack.size()
    }

    dequeue() {
        if (this.popStack.size() > 0) {
            return this.popStack.pop()
        }

        if (this.pushStack.size() > 0) {
            this._move()
            return this.popStack.pop()
        }

        return undefined
    }
}