import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];
  constructor(public filename: string) {}
  read(): void {
    // 1. load csv data
    // 2. parse flow
    // readFileSync   : one big string
    // split('¥n')    : array of csv data
    // split(',')     : array of csv data columns
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }
}
