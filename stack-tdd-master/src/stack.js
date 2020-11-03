class Stack { 

      // Array is used to implement stack 
    constructor() 
    { 
        this.items = []; 
    } 
    push(item) {
        return this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length -1];
    }
    size() {
           return this.items.length;
    }
}


module.exports.Stack = Stack;

// const test = new Stack();
// console.log(test.push(2));
// console.log(test.push(3));
// console.log(test.push(4));
// console.log(test.push(6));
// console.log(test.pop());
// console.log(test.peek());
// console.log(test.size());
// console.log(test);
