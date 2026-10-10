const readline = require('readline-sync');
function findLargest(matrix){
    let maxVal = matrix[0][0];
    let maxRow = 0;
    let maxCol = 0;

    for (let r = 0; r < matrix.length; r++){
        for(let c = 0; c < matrix[r].length; c++){
if (matrix[r][c] > maxVal){
    maxVal = matrix[r][c];
    maxRow = r;
    maxCol = c;
}
}
    }
console.log(`The location of the largest element is ${maxVal} at (${maxRow}, ${maxCol})`);
}

const dimInput = readline.question('Enter the number of rows and columns in the array: ');
const dims = dimInput.trim().split(/\s+/);
const numRows = Number(dims[0]);
console.log('Enter the array:');

const matrix = [];
for(let i = 0; i < numRows; i++){
    const rowInput = readline.question('');
    const rowStrings = rowInput.trim().split(/\s+/);

    const rowNumbers = [];
    for(let j = 0; j < rowStrings.length; j++){
        rowNumbers.push(parseFloat(rowStrings[j]));
    }
    matrix.push(rowNumbers);
}
findLargest(matrix);
