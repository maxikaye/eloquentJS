// Eloquent JS Chapter 2 Exercises - Chessboard
// Solution by @maxikaye

const size = 8;
let chessboard = '';

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          chessboard += ' ';
        } else {
          chessboard += '#';
        }
      } else {
        if (j % 2 === 0) {
          chessboard += '#';
        } else {
          chessboard += ' ';
        }
      }
    }
    if (i < size - 1) chessboard += '\n';
}

console.log(chessboard);