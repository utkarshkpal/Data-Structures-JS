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

checkPalindrome('nitin');
// checkPalindrome('ksajdksj'); checkPalindrome('Nitin');