// Eloquent JS chapter 04 exercise: The Sum of a Range
// solution by @maxikaye

function range(start, end, step=1) {
    let rangeArray = [];
    if (step < 0) {
        for (let i = start; i >= end; i += step) {
            rangeArray.push(i);
        }
    } else {
        for (let i = start; i <= end; i += step) {
            rangeArray.push(i);
        }
    }
    return rangeArray;
}

function sum(rangeArray) {
    let total = 0;
    for (let num of rangeArray) {
        total += num;
    }
    return total;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(range(10, 0, -2));
console.log(sum(range(1, 10)));