const readline = require ('readline-sync');
const AmountInvested = +readline.question('The amount invested: ');
const APR = +readline.question('Annual interest rate: ');
const Years = +readline.question('Years to project: ');

let currentvalue = AmountInvested
const monthlyrate = (APR / 100) / 12
console.log();
for (let i = 1; i <= Years; i++) {
for (let month = 1; month <=12; month++){
  currentvalue += currentvalue * (monthlyrate);
 } 
  let formattedvalue = Math.round(currentvalue * 100) / 100;
  console.log(`Year ${i}, value: ${formattedvalue}`);
}
