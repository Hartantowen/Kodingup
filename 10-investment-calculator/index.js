const readline = require ('readline-sync');
const InvestedAmount = +readline.question('The amount invested: ');
const AnnualInterestRate = +readline.question('Annual interest rate: ') / 100;
const YearsToProject = +readline.question('Years to project: ');

const Months_In_Year = 12;

function calculateCompoundAmount(InvestedAmount, AnnualInterestRate, year){
const monthlyInterestRate = AnnualInterestRate / Months_In_Year;
return InvestedAmount * (1+ monthlyInterestRate)**(year * Months_In_Year);
}

function formatCurrency(amount) {
  return Math.floor(amount * 100) / 100;
}
for (let year = 1; year <= YearsToProject; year++) {
  const compoundAmount = calculateCompoundAmount(InvestedAmount, AnnualInterestRate, year);
  console.log(`Year ${year}, value: ${formatCurrency(compoundAmount)}`);
}



