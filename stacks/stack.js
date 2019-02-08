function Stack() {
    this.dataStore = [];
    this.top = 0;

}

//push new element into the arr increment top
Stack.prototype.push = function (elem) {
    this.dataStore[this.top++] = elem;

}

Stack.prototype.printStack = function () {
    if (this.top == 0) {
        console.log('Stack is empty');
    } else {
        for (let i = 0; i < this.top; i++) {
            console.log('Stack', this.dataStore[i]);
        }

    }

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

Stack1.push('abc');
Stack1.push('pqr');
Stack1.push('xyz');
Stack1.printStack();
console.log(Stack1.pop());
Stack1.printStack();
console.log(Stack1.peek());
console.log(Stack1.length());
Stack1.clear();
Stack1.printStack();
