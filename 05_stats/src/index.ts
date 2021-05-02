import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// Todo
// 1. load csv data
// 2. parse
// 3. analyze
// 4. report

const reader = new CsvFileReader('football.csv');
reader.read();

// 3. analyze

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

// 4. report
console.log(`Man United won ${manUnitedWins} games`);
