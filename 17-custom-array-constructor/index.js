const readlineSync = require('readline-sync');

// Constructor function Arr
function Arr() {
  this.length = 0;
}

// 1. push(element)
Arr.prototype.push = function (element) {
  this[this.length] = element;
  this.length++;
  return this.length;
};

// 2. pop()
Arr.prototype.pop = function () {
  if (this.length === 0) {
    return undefined;
  }
  const lastIndex = this.length - 1;
  const element = this[lastIndex];
  delete this[lastIndex];
  this.length--;
  return element;
};

// 3. indexOf(element)
Arr.prototype.indexOf = function (element) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === element) {
      return i;
    }
  }
  return -1;
};

// 4. includes(element)
Arr.prototype.includes = function (element) {
  return this.indexOf(element) !== -1;
};

// 5. findIndex(callback)
Arr.prototype.findIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      return i;
    }
  }
  return -1;
};

// 6. find(callback)
Arr.prototype.find = function (callback) {
  const index = this.findIndex(callback);
  if (index !== -1) {
    return this[index];
  }
  return undefined;
};

// 7. filter(callback)
Arr.prototype.filter = function (callback) {
  const result = new Arr();
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i)) {
      result.push(this[i]);
    }
  }
  return result;
};

// 8. map(callback)
Arr.prototype.map = function (callback) {
  const result = new Arr();
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i));
  }
  return result;
};

// Symbol.iterator implementation
Arr.prototype[Symbol.iterator] = function () {
  let index = 0;
  const self = this;
  return {
    next: function () {
      if (index < self.length) {
        const value = self[index];
        index++;
        return { value: value, done: false };
      }
      return { value: undefined, done: true };
    }
  };
};

// Helper function to format scores into space-separated string using for...of
function formatScores(arr) {
  if (arr.length === 0) {
    return 'none';
  }
  let str = '';
  for (const score of arr) {
    str += (str ? ' ' : '') + score;
  }
  return str;
}

function displayMenu() {
  console.log('\nScore Tracker Menu');
  console.log('1. Display scores');
  console.log('2. Add a score');
  console.log('3. Remove the last score');
  console.log('4. Check whether a score exists');
  console.log('5. Find the index of a score');
  console.log('6. Find the first failing score');
  console.log('7. Show passing scores');
  console.log('8. Exit');
}

function main() {
  const scores = new Arr();
  const countInput = readlineSync.question('Number of scores: ');
  const numScores = parseInt(countInput, 10);

  for (let i = 1; i <= numScores; i++) {
    const scoreInput = readlineSync.question(`Score ${i}: `);
    scores.push(parseInt(scoreInput, 10));
  }

  let running = true;

  while (running) {
    displayMenu();
    const choice = readlineSync.question('Choose an option: ').trim();

    switch (choice) {
      case '1': {
        console.log(`Scores: ${formatScores(scores)}`);
        break;
      }
      case '2': {
        const input = readlineSync.question('Enter a score: ');
        const score = parseInt(input, 10);
        const newTotal = scores.push(score);
        console.log(`${score} added. Total scores: ${newTotal}`);
        break;
      }
      case '3': {
        if (scores.length === 0) {
          console.log('No scores to remove.');
        } else {
          const removed = scores.pop();
          console.log(`Removed: ${removed}`);
        }
        break;
      }
      case '4': {
        const input = readlineSync.question('Enter a score to check: ');
        const score = parseInt(input, 10);
        const exists = scores.includes(score);
        console.log(`${score} exists: ${exists}`);
        break;
      }
      case '5': {
        const input = readlineSync.question('Enter a score to find: ');
        const score = parseInt(input, 10);
        const idx = scores.indexOf(score);
        console.log(`Index of ${score}: ${idx}`);
        break;
      }
      case '6': {
        const failingScore = scores.find((val) => val < 60);
        const failingIndex = scores.findIndex((val) => val < 60);

        if (failingIndex === -1) {
          console.log('First failing score: none');
        } else {
          console.log(`First failing score: ${failingScore} at index ${failingIndex}`);
        }
        break;
      }
      case '7': {
        const passing = scores.filter((val) => val >= 60);
        console.log(`Passing scores: ${formatScores(passing)}`);
        break;
      }
      case '8': {
        console.log('Goodbye!');
        running = false;
        break;
      }
      default: {
        console.log('Invalid option.');
        break;
      }
    }
  }
}

main();