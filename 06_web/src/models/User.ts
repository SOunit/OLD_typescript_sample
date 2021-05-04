import { Eventing } from './Eventing';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  events: Eventing = new Eventing();

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
}
