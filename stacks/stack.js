function Stack() {
    this.dataStore = [];
    this.top = 0;

}

//push new element into the arr increment top
Stack.prototype.push = function (elem) {
    this.dataStore[this.top++] = elem;

}

Stack.prototype.printStack = function () {
    // if (this.top == 0) {     console.log('Stack is empty'); } else {     for (let
    // i = 0; i < this.top; i++) {         console.log('Stack', this.dataStore[i]);
    // } }
    console.log(this.dataStore);

}

// return the elem at top index, , delete the element
Stack.prototype.pop = function (elem) {
    return this.dataStore[--this.top];

}

Stack.prototype.peek = function () {
    return this.dataStore[this.top - 1];
}

Stack.prototype.clear = function () {
    this.top = 0;
}

Stack.prototype.length = function () {
    return this.top;
}

var Stack1 = new Stack();

// Stack1.push('abc'); Stack1.push('pqr'); Stack1.push('xyz');
// Stack1.printStack(); console.log(Stack1.pop()); Stack1.printStack();
// console.log(Stack1.peek()); console.log(Stack1.length()); Stack1.clear();
// Stack1.printStack();

/* application base conversion
Algo:
1) n%b push onto stack
2) n = floor(n/b)
3) repeat 1 and 2 untill n = 0;
4) concat values after popping from stack

*/

function mulBase(num, base) {

    var s = new Stack();
    do {

        s.push(num % base);

        num = Math.floor(num /= base);
        console.log(num);
    } while (num > 0);
    var converted = "";

    while (s.length() > 0) {

        converted += s.pop();
    }
    return converted;

}

/*
var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);
num = 125;
base = 8;
var newNum = mulBase(num, base);
console.log(num + "converted to base " + base + " is " + newNum);
*/

/*
Application :check if a string is palindrome.
  1)push elements onto the stack
  2)pop elements and concat the the string
  3)compare the original string with new string

*/

function checkPalindrome(word) {
    let s = new Stack();
    const n = word.length;
    let reverseString = '';
    for (let i = 0; i < n; i++) {
        s.push(word[i]);
    }

    s.printStack();

    while (s.length() > 0) {
        reverseString += s.pop();
    }

    console.log(reverseString);

    if (word === reverseString) {
        console.log('it is a palindrome');

    } else {
        console.log('Not a palindrome');
    }
}

// checkPalindrome('nitin'); checkPalindrome('ksajdksj');
// checkPalindrome('Nitin');

/*
Check if paranthesis is balanced
1)push first elem onto stack;
2)check if next element is matching with the top of the stack.
   If yes then : pop the element
   If not then : push the element also
3) repeat 2) until the length of string
4)if the stack is not empty then return false else return true
*/

function parenthesisBalanced(string) {

    let s = new Stack();
    const n = string.length;

    for (let i = 0; i < n; i++) {
        if (i == 0) {
            s.push(string[i]);
        } else {
            if (checkIfMatchingBracket(s.peek(), string[i])) {
                s.pop();
            } else {
                s.push(string[i]);
            }
        }
    }

    if (s.length() == 0) {
        return true;
    } else {

        return false;
    }

    function checkIfMatchingBracket(bracket1, bracket2) {

        const matchingBrackets = {
            '[': ']',
            '{': '}',
            '(': ')'
        }

        if (matchingBrackets[bracket1] === bracket2) {
            return true;
        } else {
            return false;
        }
    }

};

// console.log(parenthesisBalanced('{[()]}'));
// console.log(parenthesisBalanced('{[(])}'));
// console.log(parenthesisBalanced('{{[[(())]]}}'));

/*
Evaluation of postfix expression
1) push first 2 elements onto the stack
2) check if element is number or operator.
   if operator : 1) b = s.pop();
                 2) a = s.pop();
                 3)  s.push(a operator b);
   if number push element onto stack
3) Repeat 2) until for whole string;

*/

function postfixEvaluation(string) {
    const n = string.length;
    const s = new Stack();

    for (let i = 0; i < n; i++) {

        if (i == 0 || i == 1) {
            s.push(string[i]);
        } else {
            if (Number.isNaN(Number(string[i]))) {

                const operator = string[i];
                const b = s.pop();
                const a = s.pop();
                const result = eval(String(a).concat(operator, b));
                s.push(result);
            } else {
                s.push(string[i]);
            }
        }

    }

    return s.peek();
}

console.log(postfixEvaluation('231*+9-'));