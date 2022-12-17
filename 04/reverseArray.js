// Eloquent JS chapter 04 exercise: Reversing an Array
// solution by @maxikaye

function reverseArray(arr) {
    let reversedArray = [];
    for (let i = 0; i < arr.length; i++) {
        reversedArray.unshift(arr[i]);
    }
    return reversedArray;

}

function reverseArrayInPlace(arr) {
    const len = arr.length;
    for (let i = 0;  i <= len / 2; i++) {
        let temp_value = arr[i];
        arr[i] = arr[len - i - 1];
        arr[len - i - 1] = temp_value;
    }
    return arr;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5, 6, 7, 8];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);