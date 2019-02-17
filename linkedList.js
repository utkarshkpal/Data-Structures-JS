function Node(data) {
    this.data = data;
    this.next = null;

}

function linkedList() {
    this.head = new Node('head');
}

linkedList.prototype.insert = function (data) {
    let currNode = this.head;
    while (currNode.next !== null) {
        currNode = currNode.next;
    }

    const newNode = new Node(data);
    currNode.next = newNode;
}

linkedList.prototype.print = function () {

    let currNode = this.head;
    let printString = 'head';

    while (currNode.next !== null) {
        currNode = currNode.next;
        printString = printString.concat('->', currNode.data);
    }

    console.log(printString);
}
linkedList.prototype.find = function (item) {
    let currNode = this.head;
    while (currNode !== null && currNode.data !== item) {
        currNode = currNode.next;
    }
    return currNode;
}

linkedList.prototype.remove = function (item) {
    let currNode = this.head.next;
    let prevNode = this.head;

    if (prevNode.data === item) {
        this.head = prevNode.next;
    } else {
        while (currNode !== null) {

            if (currNode.data === item) {
                prevNode.next = currNode.next;
            }
            currNode = currNode.next;
            prevNode = prevNode.next;

        }

    }

}

// const ll = new linkedList(); ll.insert(1); ll.insert(2); ll.insert(3);
// ll.print(); console.dir(ll.find(2)); console.dir(ll.find(3));
// console.dir(ll.find(5)); ll.remove(2); ll.print(); ll.remove(3); ll.print();
// ll.remove(1); ll.print();

/*
Remove duplicates from unsorted LL.
 1)iterate through the ll.
 2)newly encountered element put inside hash table. (increment c and p )
 3)if element already inside the table delete c from ll.  (increment only c)

 Time : O(n)  Space : O(n)

*/

printList = function (head) {
    let currNode = head;
    let printString = 'head';

    while (currNode.next !== null) {
        currNode = currNode.next;
        printString = printString.concat('->', currNode.data);
    }

    console.log(printString);
}

function RemoveDuplicates(head) {
    let prevNode = head;
    let currNode = head.next;
    const hashMap = {};

    while (currNode !== null) {
        if (hashMap[currNode.data] === 1) {
            prevNode.next = currNode.next;
            currNode = currNode.next;
        } else {
            hashMap[currNode.data] = 1;
            prevNode = prevNode.next;
            currNode = currNode.next;
        }
    }

}

function RemoveDuplicatesSorted(head) {
    let prevNode = head;
    let currNode = head.next;
    const hashMap = {};

    while (currNode !== null) {
        if (prevNode.data == currNode.data) {
            prevNode.next = currNode.next;
            currNode = currNode.next;
        } else {

            prevNode = prevNode.next;
            currNode = currNode.next;
        }
    }

    return head;

}

// const ll1 = new linkedList(); ll1.insert(12); ll1.insert(12); ll1.insert(12);
// ll1.insert(11); ll1.insert(12); ll1.insert(21); ll1.insert(41);
// ll1.insert(43); ll1.insert(21); ll1.insert(21); printList(ll1.head);
// RemoveDuplicates(ll1.head); printList(ll1.head); ll1.insert(1);
// ll1.insert(1); ll1.insert(2); ll1.insert(3); ll1.insert(3); ll1.insert(4);
// ll1.insert(4); ll1.insert(4); printList(ll1.head);
// RemoveDuplicatesSorted(ll1.head); printList(ll1.head);

/*
  Delete middle element

*/

function deleteMiddleElement(head) {
    let slow = head;
    let fast = head;

    // no element
    if (head == null) {
        return null;
    }

    //1 element
    if (head.next == null) {
        head = null;
        return head;
    }

    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    slow.next = slow.next.next;

}

/*
ll1.insert(1);
ll1.insert(2);
ll1.insert(3);
ll1.insert(4);
ll1.insert(5);
printList(ll1.head);
deleteMiddleElement(ll1.head);
printList(ll1.head);
*/

/*
 Sum of 2 linked list

*/

function generateNumberfromLL(head) {

    let currNode = head.next;
    let multiplier = 1;
    let number = 0;
    while (currNode != null) {

        number = multiplier * currNode.data + number;
        multiplier *= 10;
        currNode = currNode.next;
    }

    return number;
}

function generateLLfromNumber(number) {

    function insertAtFront(head, number) {
        const newNode = new Node(number);
        newNode.next = head.next;
        head.next = newNode;
    }

    const ll3 = new linkedList();

    while (number / 10 !== 0) {
        const digit = number % 10;
        insertAtFront(ll3.head, digit);
        number = Math.floor(number / 10);
    }

    return ll3;

}

function addTwoLL(head1, head2) {
    const first = generateNumberfromLL(head1);
    const second = generateNumberfromLL(head2);
    const sum = first + second;
    return generateLLfromNumber(sum);

}

/*
const ll1 = new linkedList();

ll1.insert(7);
ll1.insert(2);

const ll2 = new linkedList();

ll2.insert(5);
ll2.insert(2);
ll2.insert(1);

//Using ll print function and calling it the newly returned ll.
linkedList
    .prototype
    .print
    .call(sumOfLL(ll1.head, ll2.head));
*/

// linkedList     .prototype     .print     .call(generateLLfromNumber(1013));

/*
LL stored in reverse order
WAY 2 : in single pass
7->1->6  617
9->2  29

  7+9 = 16 . [6] in  the list. 1 carry;
  2+1 +1(c) = 4 .[4] in the list . 0 carry.
  6+ 0 +0(c) = 6. [6] in list. carry 0 .
*/

function sumOfLL(head1, head2) {
    let currNode1 = head1.next;
    let currNode2 = head2.next;
    const ll3 = new linkedList();
    let carry = 0;

    function insertAtFront(head, number) {
        const newNode = new Node(number);
        newNode.next = head.next;
        head.next = newNode;
    }

    while (currNode1 != null || currNode2 != null) {
        let firstDigit = 0,
            secondDigit = 0;
        if (currNode1 != null) {

            firstDigit = currNode1.data;
        }
        if (currNode2 != null) {

            secondDigit = currNode2.data;
        }

        const sum = firstDigit + secondDigit + carry;
        carry = Math.floor(sum / 10);
        insertAtFront(ll3.head, sum % 10);
        if (currNode1 != null) {
            currNode1 = currNode1.next;
        }
        if (currNode2 != null) {
            currNode2 = currNode2.next;
        }

    }
    //insert last carry into LL
    if (carry) {
        insertAtFront(ll3.head, carry);
    }

    return ll3;
}

/*
Check if ll is palinderome.

Algo1 : 1)reverse the ll.
        2)initialize 2 counter one with original and other with reversed.
        3)loop through the both ll
             if data not equal return false;
         return true;

Algo2 : 1)Push half elements onto stack.
        2)iterate over the rest half of ll
        compare it with the popped value from the stack.
        3)if equal return false.
        else return true;
                                odd : after half iteration increment s
        R-A-D-A-R
            s
                f                while(f.next!=null || f.next.next!=null)
        S:R,A


 */

function checkLLPalindrome(head) {
    const s = new Stack();
    let slow = head.next;
    let fast = head.next;

    while (fast !== null && fast.next != null) {
        // debugger;
        s.push(slow.data);
        slow = slow.next;
        fast = fast.next.next;
    }
    //ll is odd
    if (fast != null) {
        slow = slow.next;
    }

    while (slow.next != null) {
        if (slow.data != s.pop()) {
            return false;
        }
        slow = slow.next;
    }
    return true;
}

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

const ll1 = new linkedList();

ll1.insert(1);
ll1.insert(2);
ll1.insert(3);
ll1.insert(2);
ll1.insert(1);

console.log(checkLLPalindrome(ll1.head));