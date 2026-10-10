const readline = require ('readline-sync');
const miles = +readline.question('Enter miles: ');
const kilometers_in_miles = 1.60934;
const kilometers = miles * kilometers_in_miles;

console.log(miles + ' miles' + ' is equal to' + convert + ' kilometers')

