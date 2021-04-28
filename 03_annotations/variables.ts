const apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in object
let now: Date = new Date();

// array
let colors: string[] = ['green', 'blue', 'yellow'];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// classes
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = { x: 10, y: 20 };

// when to use annotations
// 1. function that returns any type
const json = '{"x": 10, "y": 20}';
const coodinates: { x: number; y: number } = JSON.parse(json);
console.log(coodinates);

// 2. when we declare a variable on one line
//  and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3. variable whose type cannot be infered correctly
let testNums = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < testNums.length; i++) {
  if (testNums[i] > 0) {
    numberAboveZero = testNums[i];
  }
}
