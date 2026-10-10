const readline = require('readline-sync');
function mergeList(list1, list2) {
  const combined = list1.concat(list2);

  const NumberList = [];
  for (let i = 0; i < combined.length; i++) {
    NumberList.push(parseFloat(combined[i]));
  }
    NumberList.sort((a,b) => a - b);
    return NumberList;
}
  
const input1 = readline.question('Enter list1: ');
const input2 = readline.question('Enter list2: ');

const list1 = input1.trim().split(/\s+/).filter(Boolean);
const list2 = input2.trim().split(/\s+/).filter(Boolean);

const mergedList = mergeList(list1, list2);
console.log(`The merged list is ${mergedList.join(' ')}`);