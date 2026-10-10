const readline = require ('readline-sync');
const size = +readline.question('Enter size: ');

console.log('')
let line = '';
for (let i = 0; i < size; i++) {
    line += '*'; 
    }
for (let i = 0; i < size; i++) {
    console.log(line);
}

