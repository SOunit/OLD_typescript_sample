import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

// load data
const reader = new MatchReader('football.csv');
reader.read();

// analyze data
let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

// report data
console.log(`Man United won ${manUnitedWins} games`);
