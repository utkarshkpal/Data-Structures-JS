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

// console.log(CheckIfSubset([     3,     3,     3,     1,     36,     21, 3, 7,
//     7 ], [     3,     3,     7,     7,     7,     1 ]));
// console.log(CheckIfSubset([     1,     2,     3,     4,     5,     6 ], [1,
// 2, 4])); console.log(CheckIfSubset([     10, 5, 2, 23, 19 ], [19, 5, 3]));

/*
  Application :check if a array has a sum of pair equal to x

  A[5,7,8,3,1,6]   x:9

  1) Initialize an empty hash table s.
  2) Do following for each element A[i] in A[]
   (a)    If s[x - A[i]] is set then print the pair (A[i], x - A[i])
   (b)    Insert A[i] into s.

   s[5]  = 1;
   s[7]  = 1;
   s[8]  = 1;   //already set
   s[3]  = 1;

    return (1,8)

*/

function arrWithGivenSum(a, x) {
    const hTable = {}

    for (let i = 0; i < a.length; i++) {
        if (hTable[x - a[i]] != undefined) {
            const string = String(a[i]) + ' ' + String(x - a[i]);
            return string;
        }
        hTable[a[i]] = 1;
    }
    return false;

}

// console.log(arrWithGivenSum([     5,     7,     8,     3,     1,     6 ],
// 100));

function superReducedstring(s) {

    function reduce(s, altered) {

        if (!altered) {
            return s;
        }
        const arr = s.split('');

        for (let i = 0; i < s.length; i++) {
            if (arr[i] == arr[i + 1]) {
                arr[i] = "";
                arr[i + 1] = "";
                const newstring = arr.join('');
                return reduce(newstring, true);
            }

        }
        return s;
    }

    const reducedstring = reduce(s, true);

    if (reducedstring.length == 0) {
        return 'Empty String';
    }
    return reducedstring;

}

function miniMaxSum(arr) {
    let sum = 0;
    let min = arr[0],
        max = arr[0];
    for (let i = 0; i < arr.length; i++) {

        if (min > arr[i]) {
            min = arr[i];
        }
        if (max < arr[i]) {
            max = arr[i];
        }

        sum += arr[i];
    }
    const maxSum = sum - min;
    const minSum = sum - max;
    const string = minSum + ' ' + maxSum;
    console.log(string);
}
// miniMaxSum([1, 2, 3, 4, 5]); console.log(superReducedstring('baab'));

function sanitize(string) {
    const regex = /[^\w]/g;
    return string
        .replace(regex, '')
        .toLowerCase();
}

function Urlify(s) {

    const charArr = s.split('');
    let whitespaces = 0;

    for (let char in charArr) {
        if (charArr[char] == ' ') {
            whitespaces++;
        }
    }
    // debugger;

    let totalLength = (charArr.length + 2 * whitespaces) - 1;

    for (let i = charArr.length - 1; i >= 0; i--) {
        if (charArr[i] != " ") {
            charArr[totalLength--] = charArr[i];
        } else {
            charArr[totalLength--] = '0';
            charArr[totalLength--] = '2';
            charArr[totalLength--] = '%';
        }
    }
    console.log(charArr);
    return charArr.join('');

}

console.log(Urlify("  mr john  wick "));