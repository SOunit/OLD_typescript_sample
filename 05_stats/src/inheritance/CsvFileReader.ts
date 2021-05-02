import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  // change data structure to process easily
  // sample:
  // '1,2,3,1,2,3,1,2,3'
  // '1,2,3,1,2,3,1,2,3'
  // '1,2,3,1,2,3,1,2,3'
  // => [[1,2,3], [1,2,3], [1,2,3]]
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
