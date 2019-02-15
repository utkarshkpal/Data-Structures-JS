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

const ll1 = new linkedList();

// ll1.insert(12); ll1.insert(12); ll1.insert(12); ll1.insert(11);
// ll1.insert(12); ll1.insert(21); ll1.insert(41); ll1.insert(43);
// ll1.insert(21); ll1.insert(21); printList(ll1.head);
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

ll1.insert(1);
ll1.insert(2);
ll1.insert(3);
ll1.insert(4);
ll1.insert(5);

printList(ll1.head);
deleteMiddleElement(ll1.head);
printList(ll1.head);
