import { User } from './models/User';

const user = new User({ name: 'Jack', age: 38 });

user.on('change', () => {});
user.on('change', () => {});
user.on('click', () => {});

console.log(user);
