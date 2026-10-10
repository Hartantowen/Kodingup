const readline = require ('readline-sync');
const size = +readline.question('Enter size: ');

for (let i = size; i > 0; i--){
    let line= '';
    for (let j = 0; j < i; j++){
        line += '*';
    }
    console.log(line);
}

