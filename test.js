'use strict';

process
    .stdin
    .resume();
process
    .stdin
    .setEncoding('utf-8');
const fs = require('fs');

let inputString = '';
let currentLine = 0;

process
    .stdin
    .on('data', inputStdin => {
        inputString += inputStdin;
    });

process
    .stdin
    .on('end', _ => {
        inputString = inputString
            .replace(/\s*$/, '')
            .split('\n')
            .map(str => str.replace(/\s*$/, ''));

        main();
    });

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const res = [];

    let q = readLine().split(' ');
    console.log(q);

    function Stack() {
        this.dataStore = [];
        this.top = 0;

    }

    //push new element into the arr increment top
    Stack.prototype.push = function (elem) {
        this.dataStore[this.top++] = elem;

    }

    // return the elem at top index, , delete the element
    Stack.prototype.pop = function (elem) {
        return this.dataStore[--this.top];

    }

    Stack.prototype.peek = function () {
        return this.dataStore[this.top - 1];
    }

    const s = new Stack();
    const maxArr = [];

    while (q--) {
        const tx = readLine().split(' ');
        const t = parseInt(tx[0], 10);

        if (t == 1) {
            const x = parseInt(tx[1], 10);
            Push(x);
        } else if (t == 2) {
            Pop();
        } else {
            const a = [];

            let max = s.peek();
            while (s.top != 0) {
                const currentItem = s.pop();
                if (max < s.pop()) {
                    max = currentItem;
                }

            }

            maxArr.push(max);

        }

    }

    ws.write(maxArr.join('\n'));

    ws.end();

}
