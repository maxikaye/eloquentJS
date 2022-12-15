// Eloquent JS chapter 03 exercise: Recursion
// solution by @maxikaye

function isEven(num) {
    if (num === 0) {
        return 'even';
    } else if (num === 1) {
        return 'odd'
    } else if (num < 0) {
        return isEven(-num);
    } else {
        return isEven(num -2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));