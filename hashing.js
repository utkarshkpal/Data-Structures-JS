/* Create a hash table
that stores an arr of string
using the index as of their
ascii values of char of the string.
*/

function HashTable() {
    this.table = new Array(137);
}
HashTable.prototype.put = function (data) {
    const pos = this.hashFunc(data);
    this.table[pos] = data;
}

HashTable.prototype.showDistro = function () {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i] != undefined) {
            console.log(i + ' : ' + this.table[i]);
        }
    }
}

HashTable.prototype.hashFunc = function (data) {
    let total = 0
    const H = 37;
    for (i = 0; i < data.length; i++) {
        total += H * data.charCodeAt(i);
    }

    // console.log("Hash value: " + data + " -> " + total);
    total % this.table.length;

    if (total < 0) {

        total += this.table.length - 1;
    }
    return parseInt(total);
}

var someNames = [
    "David",
    "Jennifer",
    "Donnie",
    "Raymond",
    "Cynthia",
    "Mike",
    "Clayton",
    "Danny",
    "Jonathan"
];
const hTable = new HashTable();
for (let i = 0; i < someNames.length; i++) {
    hTable.put(someNames[i]);
}
// hTable.showDistro();

/*
Application : to check whether a given array is a subset a subset of another array

1)Save the array in htable with key as the value and increment value by 1;
2)Iterate over each value of second array check
     if any htable[value] == undefined
         return false
     else
       htable[value]--;
       if(htable[value] < 0){
           return false
       }

       return true
*/

function CheckIfSubset(a1, a2) {

    const hTable = {};

    for (let i = 0; i < a1.length; i++) {
        hTable[a1[i]] === undefined
            ? hTable[a1[i]] = 1
            : hTable[a1[i]]++;
    }

    for (let i = 0; i < a2.length; i++) {

        let value = a2[i];
        if (hTable[value] === undefined) {
            return false
        } else {
            hTable[value]--;
            if (hTable[value] < 0) {
                return false
            }

        }
    }
    return true;

}

console.log(CheckIfSubset([
    3,
    3,
    3,
    1,
    36,
    21,
    3,
    7,
    7
], [
    3,
    3,
    7,
    7,
    7,
    1
]));

// console.log(CheckIfSubset([     1,     2,     3,     4,     5,     6 ], [1,
// 2, 4])); console.log(CheckIfSubset([     10, 5, 2, 23, 19 ], [19, 5, 3]));