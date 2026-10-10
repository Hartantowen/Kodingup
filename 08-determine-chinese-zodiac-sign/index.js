const readline = require ('readline-sync');

function determineChineseZodiac(year) {
    const CHINEZE_ZODIAC_COUNT = 12

const remainderYear = year % CHINEZE_ZODIAC_COUNT;

switch (remainderYear) {
    case 0: return 'monkey';
    case 1: return 'rooster'; 
    case 2: return 'dog'; 
    case 3: return 'pig'; 
    case 4: return 'rat'; 
    case 5: return 'ox'; 
    case 6: return 'tiger'; 
    case 7: return 'rabbit'; 
    case 8: return 'dragon'; 
    case 9: return 'snake'; 
    case 10: return'horse'; 
    case 11: return 'sheep'; 
}
}

const year = readline.question('Enter a year: ');
const chineseZodiac = determineChineseZodiac(year);
console.log(`\nThe Chinese zodiac for year ${year} is ${chineseZodiac}`);
