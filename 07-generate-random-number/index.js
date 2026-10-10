const readline = require ('readline-sync');
const min = +readline.question('Enter minimum: ');
const max = +readline.question('Enter maximum: ');

function generateRandomNumber(min,max){
return Math.floor(Math.random() *(max - min + 1)) + min;
}

const number =  generateRandomNumber(min, max);
console.log(`\nRandom number between ${min} and ${max}: ${number}`)
