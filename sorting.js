/*couting sort
algo :
1) make count array
2) for each value add previous value to the current in the count array.
3) count array gives the position of each obj in oArr sequence.
4) reduce the value in the count arr by 1.

complexity : O(n + k) where data is of range 1 to k.

if k = n^2. Complexity O(n^2) which is worse than comparision base algo O(nlogn).

Enters Radix sort.
*/

function countsort(arr) {
    const countArray = new Array(10).fill(0);
    const oArrArray = [];

    for (let value of arr) {

        countArray[value]++;

    }

    console.log(countArray);

    for (let i = 1; i < countArray.length; i++) {

        countArray[i] += countArray[i - 1];
    }
    console.log(countArray);

    for (value of arr) {

        oArrArray[countArray[value]] = value;
        countArray[value]--;
    }

    return oArrArray.splice(1);

}

// const sorted = countsort([     1,     4,     1,     2,     7,     5,     2
// ]); console.log(sorted);

/*
merge sort

*/

function merge(oArr, l, m, r) {

    const arr = [],
        arr2 = [];

    let i = 0,
        j = 0,
        k = 0;

    while (l <= m) {
        arr[i++] = oArr[l++]
    }
    m++;
    while (m <= r) {
        arr2[j++] = oArr[m++];
    }

    i = 0,
    j = 0,
    k = 0;

    const l1 = arr.length;
    const l2 = arr2.length;

    while (i < l1 && j < l2) {
        if (arr[i] <= arr2[j]) {
            oArr[k++] = arr[i++];

        } else {
            oArr[k++] = arr2[j++];
        }
    }

    if (i >= l1) {
        while (j < l2) {
            oArr[k++] = arr2[j++];
        }
    } else if (j >= l2) {
        while (i < l1) {
            oArr[k++] = arr[i++];
        }

    }
    return oArr;

}

function mergeSort(oArr, l, r) {

    if (l < r) {

        const m = Math.floor(l + (r - l) / 2);
        mergeSort(oArr, l, m);
        mergeSort(oArr, m + 1, r);
        merge(oArr, l, m, r);
    }

}
const oArr = [
    12,
    11,
    13,
    5,
    6,
    7
];

// mergeSort(oArr, 0, oArr.length - 1); console.log(oArr);

/*
quicksort
algo :

*/

function partition(arr, l, h) {
    const pivot = arr[h];

    let i = -1,
        j = 0;

    for (j = 0; j < h; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(i, j);
        }
    }

    swap(i + 1, h);

    function swap(i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return i + 1;
}

function quicksort(arr, l, h) {

    if (l < h) {
        const part = partition(arr, l, h);
        quicksort(arr, l, part - 1);
        quicksort(arr, part + 1, h);
    }

}

const arr = [
    10,
    30,
    40,
    50,
    80,
    90,
    70
];

quicksort(arr, 0, arr.length - 1);

console.log(arr);