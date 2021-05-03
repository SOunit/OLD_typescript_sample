import { User } from './models/User';

const user = new User({ name: 'Jack', age: 38 });

user.on('change', () => {
  console.log('change #1');
});
user.on('change', () => {
  console.log('change #2');
});
user.on('click', () => {
  console.log('click');
});
user.on('save', () => {
  console.log('save');
});

user.trigger('test');
