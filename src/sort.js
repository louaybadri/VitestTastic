// this file is to sort an array after checking if its having all integers

function sortInts(arr) {
    if (arr.every(Number.isInteger)) {
        return arr.sort((a, b) => a - b);
    }
    return null;
}

export default sortInts;