const readline = require('readline-sync');

const accounts = []
for (let i = 0; i < 10; i++) {
  accounts.push({ id: i, balance: 100 });
}

function showMenu() {
  console.log('\nMain menu');
  console.log('1: check balance');
  console.log('2: withdraw');
  console.log('3: deposit');
console.log('4: exit');
}
while (true) {
  const idInput = readline.question('Enter an id: ');
const id = parseInt(idInput.trim(), 10);

if (isNaN(id) || id < 0 || id > 9) {
  continue;
}

let exitMenu = false;
while (!exitMenu) {
  showMenu();
  const choice = readline.question('Enter a choice: ');
  if (choice === '1') {
    console.log(`The balance is ${accounts[id].balance.toFixed(1)}`);
  } else if (choice === '2') {
    const amountInput = readline.question('Enter an amount to withdraw: ');
    const amount = parseFloat(amountInput);
    if (!isNaN(amount)) {
      accounts[id].balance -= amount;
    }
    } else if (choice === '3') {
      const amountInput = readline.question('Enter an amount to deposit: ');
      const amount = parseFloat(amountInput);
      if (!isNaN(amount)) {
        accounts[id].balance += amount;
      }
  } else if (choice === '4') {
    console.log ('');
    exitMenu = true;
  }
  }
}