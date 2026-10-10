const readline = require('readline-sync');

const input = readline.question('Enter the integers between 1 and 100: ');
const rawValues = input.trim().split(/\s+/).filter(Boolean);
const counts = {};

for (const rawValue of rawValues){
  const num = parseInt(rawValue,10);
  if(!isNaN(num) && num >= 1 && num <= 100) {
counts[num] = (counts[num] || 0) + 1;
  }
}
 
const sortedNumbers = Object.keys(counts)
.map(Number)
.sort((a,b)=> a - b);

for (const num of sortedNumbers){
  const occurance = counts[num];
  const label = occurance === 1 ? 'time' : 'times';
  console.log(`${num} occurs ${occurance} ${label}`);
}
