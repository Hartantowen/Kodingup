const readlineSync = require('readline-sync');

function Elevator(from, to) {
    this.from = Number(from);
    this.to = Number(to);
}

Elevator.prototype[Symbol.iterator] = function (){
    let current = this.from;
    const target = this.to;
    const step = current <= target ? 1 : -1;
    let finished = false;

    return {
next: function () {
    if (finished) {
        return { value: undefined, done: true };
    }
    
    if (current === 13) {
        current += step;
    }
    const value = current;

    if ( current === target) {
        finished = true;
    } else {
current += step;
if (current === 13) {
    current += step;
}
    }

    return {value: value, done: false};
}
    }
}

function run() {
    const currentInput = readlineSync.question('Current floor: ');
    const destInput = readlineSync.question('Destination floor: ');

    const from = parseInt(currentInput, 10);
    const to = parseInt(destInput, 10);

    const elevator = new Elevator(from, to);

    const iterator = elevator[Symbol.iterator]();
    let stepCount = 1;
    let result;

    do {
        result = iterator.next();
        console.log(`Step ${stepCount}: value=${result.value}, done=${result.done}`);
        stepCount++;
    } while (!result.done);
}
run();