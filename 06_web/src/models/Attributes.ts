export class Attributes<T> {
  constructor(private data: T) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: T): void {
    // Object.assign
    // copy all prop from 2nd argument to 1st argument
    // if prop exists, override the prop
    Object.assign(this.data, update);
  }
}
