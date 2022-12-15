// Eloquent JS chapter 03 exercise: Bean counting
// solution by @maxikaye

function countBs(str) {
    return countChar(str, 'B');
}

function countChar(str, char) {
  let charCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) charCount += 1;
  }
  return charCount;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));