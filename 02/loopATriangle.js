// Eloquent JS Chapter 2 Exercises - Loop a Triangle
// Solution by @maxikaye

const hash = '#######';
for (let i = 0; i < hash.length; i++) {
    console.log(hash.slice(0, i+1));
}