const readline = require ('readline-sync');
const CardNumber = +readline.question('Enter card number: ');
const Rank_Count = 13

const suit = determineSuit(CardNumber);
function determineSuit(CardNumber){
switch (Math.floor(CardNumber / Rank_Count)) {
    case 0: return 'Spades';
    case 1: return 'Hearts';
    case 2: return 'Diamonds'; 
    case 3: return 'Clubs'; 
}
}
const rank = determineRank(CardNumber);
function determineRank(CardNumber){
switch (Math.floor(CardNumber % Rank_Count)) {
    case 0: return 'ace';
    case 1: return '2';
    case 2: return '3';
    case 3: return '4';
    case 4: return '5';
    case 5: return '6';
    case 6: return '7';
    case 7: return '8';
    case 8: return '9';
    case 9: return '10';
    case 10: return 'Jack';
    case 11: return 'Queen';
    case 12: return 'King';
}
}
console.log(`Card number ${CardNumber}: ${rank} of ${suit}`)