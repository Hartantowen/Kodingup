const readline = require('readline-sync');

function parseNumber(str) {
  const strs = str.split(' ');
  const numbers = [];

  for (let i = 0; i < strs.length; i++) {
    if (strs[i] !==''){ 
    const number = +strs[i];
    numbers.push(number);
  }
}
  return numbers;
}
    
  function equals(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  const list1 = parseNumber(readline.question('Enter list1: '));
    const list2 = parseNumber(readline.question('Enter list2: '));

if (equals(list1, list2)) {
  console.log('Two lists are strictly identical');
} else {
  console.log('Two lists are not strictly identical');
}