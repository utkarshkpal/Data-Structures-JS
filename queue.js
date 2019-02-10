/*Queue interface */

function Queue() {
    this.dataStore = [];
    this.front = 0;
    this.back = 0;
}

Queue.prototype.enqueue = function (elem) {
    this.dataStore[this.back++] = elem;
}

Queue.prototype.dequeue = function () {

    const frontElem = this.dataStore[this.front++];
    return frontElem;
}

Queue.prototype.frontElem = function () {

    return this.dataStore[this.front];
}

Queue.prototype.backElem = function () {

    return this.dataStore[this.back - 1];
}

Queue.prototype.isEmpty = function () {

    if (this.front == this.back) {
        return true;
    }
    return false;
}

Queue.prototype.printQueue = function () {

    const copy = this
        .dataStore
        .slice(this.front);
    console.log(copy);
}

const Q = new Queue();

/*
Q.enqueue('2');
Q.enqueue('1');
Q.enqueue('3');
Q.enqueue('5');
// Q.printQueue();

console.log(Q.dequeue());
console.log(Q.dequeue());
console.log(Q.dequeue());
console.log(Q.isEmpty());
console.log(Q.dequeue())
console.log(Q.isEmpty());

Q.printQueue();

Q.enqueue('6');
Q.enqueue('7');
console.log(Q.dequeue());
console.log(Q.dequeue());
Q.printQueue();
console.log(Q.frontElem());
console.log(Q.backElem());
*/

/* Implementing Stack With 2 Queue
    s:1,2,3,4,5

  q1: 4,3,2,1
  q2:

  Algo : In this algo q1 front element will always hold the last element added

        Push(x)
        1) enqueue x to q2;
        2) dequeue all elem from q1 and enqueue to q2
        3) inter change name of q1 and q2

        pop()
        dequeue() ffrom q1
*/

(function StackWithQueue() {
    let q1 = new Queue();
    let q2 = new Queue();
    function Push(x) {
        // debugger;
        q2.enqueue(x);
        while (!q1.isEmpty()) {

            q2.enqueue(q1.dequeue());
        }

        const temp = q1;
        q1 = q2;
        q2 = temp;

    }

    function Pop() {

        return q1.dequeue();
    }

    Push(1);
    Push(2);
    console.log(Pop());
    Push(3);
    console.log(Pop());
    Push(4)
    console.log(Pop());
})();