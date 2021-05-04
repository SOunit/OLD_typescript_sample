export class Attributes<T> {
  constructor(private data: T) {}

  // 1. receive key as key
  // 2. return T[K] as value
  // 3. set generic to limit argument type
  // 4. set generic key to limit argument type to key

  // for argument limit
  // T = UserProps = {id:number, name:string, age:number}
  // K = keyof T = id, name, age

  // for return value
  // T[K] = UserProps[id] = number
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    // Object.assign
    // copy all prop from 2nd argument to 1st argument
    // if prop exists, override the prop
    Object.assign(this.data, update);
  }
}
