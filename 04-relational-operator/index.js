const readline = require ('readline-sync');
 const number1 = +readline.question('Enter first number: ');
 const number2 = +readline.question('Enter second number: ');
 const answer = +readline.question(`What is ${number1} + ${number2}? `);

 const sum = number1 + number2;

console.log(`${number1} + ${number2} = ${answer} is ${answer === sum}`);