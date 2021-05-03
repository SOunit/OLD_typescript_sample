import { User } from './models/User';

const user = new User({ name: 'Jack', age: 38 });
console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'Kate', age: 39 });
console.log(user.get('name'));
console.log(user.get('age'));

user.set({ name: 'Kevin' });
console.log(user.get('name'));
console.log(user.get('age'));
