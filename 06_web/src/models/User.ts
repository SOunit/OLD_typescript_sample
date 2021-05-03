interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => {};

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    // Object.assign
    // copy all prop from 2nd argument to 1st argument
    // if prop exists, override the prop
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback) {}
}
