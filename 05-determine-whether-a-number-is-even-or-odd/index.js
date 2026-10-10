const readline = require ('readline-sync');
const number = Number(readline.question('Enter a number: '));

const isOdd = number % 2 ===1;
if (isOdd) {
    console.log(`${number} is odd`);
} else {
    console.log(`${number} is even`);
}
