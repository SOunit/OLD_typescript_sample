import fs from 'fs';
console.log('hi');

// Todo
// 1. load csv data
// 2. parse
// 3. analyze
// 4. report

// 1. load csv data
// 2. parse flow
// readFileSync   : one big string
// split('¥n')    : array of csv data
// split(',')     : array of csv data columns
const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

console.log(matches);

// 3. analyze
let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUnitedWins++;
  }
}

// 4. report
console.log(`Man United won ${manUnitedWins} games`);
