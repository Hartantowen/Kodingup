const readline = require ('readline-sync');
const seconds = readline.question('Enter seconds: ');
const seconds_in_minute = 60;
const minutes = Math.floor(Number(seconds) / seconds_in_minute);
const remainingseconds = (Number(seconds % seconds_in_minute));
console.log('\n' + seconds + ' seconds is ' + minutes + ' minutes and ' + remainingseconds + ' seconds');