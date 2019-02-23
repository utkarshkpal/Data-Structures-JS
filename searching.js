function binarySearch(arr, data) {

    const length = arr.length;
    return search(0, length - 1, data);

    //recursively searching for data
    function search(l, r, data) {

        const mid = Math.floor((l + r) / 2);

        if (arr[mid] == data) {
            return mid;
        }

        if (l == r && arr[mid] != data) {
            return null;
        }

        if (data > arr[mid]) {

            return search(mid + 1, length - 1, data);
        }

        return search(0, mid - 1, data);

    }

}

console.log(binarySearch([
    2,
    4,
    5,
    6,
    7,
    8,
    9,
    20,
    40,
    80
], 80));