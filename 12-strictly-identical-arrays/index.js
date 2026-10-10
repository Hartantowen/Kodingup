const readline = require('readline-sync');
function equals(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
    } 
    for(let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
       return true;
      }
   
  
    const input1 = readline.question('Enter list1: ');
    const input2 = readline.question('Enter list2: ');

    const list1 = input1.trim().split(/\s+/).filter(Boolean);
    const list2 = input2.trim().split(/\s+/).filter(Boolean);

    const result = equals(list1, list2);

   if (result){
    console.log('Two lists are strictly identical');
   }else { 
    console.log('Two lists are not strictly identical');
   }
   
    
