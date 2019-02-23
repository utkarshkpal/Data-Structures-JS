/*couting sort
algo :
1) make count array
2) for each value add previous value to the current in the count array.
3) count array gives the position of each obj in output sequence.
4) reduce the value in the count arr by 1.
*/

function countsort(arr) {
    const countArray = new Array(10).fill(0);
    const outputArray = [];

    for (value of arr) {

        countArray[value]++;

    }

    console.log(countArray);

    for (let i = 1; i < countArray.length; i++) {

        countArray[i] += countArray[i - 1];
    }
    console.log(countArray);

    for (value of arr) {

        outputArray[countArray[value]] = value;
        countArray[value]--;
    }

    return outputArray.splice(1);

}

const sorted = countsort([
    1,
    4,
    1,
    2,
    7,
    5,
    2
]);

console.log(sorted);