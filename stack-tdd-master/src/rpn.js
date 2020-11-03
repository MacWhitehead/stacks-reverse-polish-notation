const Stack = require('./stack').Stack;

const stack = new Stack();

function rpn(string) {
    let splitUp = string.split(' ');

    if (string === '') {
        return 0;
    }

    for (i = 0; i < splitUp.length; i++) {
        let a = stack.pop();
        let b = stack.pop();
        if (splitUp[i] == '+') {
            stack.push(a + b);
        } else if (splitUp[i] == '*') {
            stack.push(a * b);
        } else if (splitUp[i] == '-') {
            stack.push(a - b);
        } else if (splitUp[i] == '/') {
            stack.push(a / b);
        }
    }
}

let testingRpn1 = rpn('3 11 +');
console.log(testingRpn1);
console.log(stack)



module.exports.rpn = rpn;