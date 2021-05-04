import { User } from './models/User';

const newUser = new User({ name: 'Jack', age: 18 });

newUser.events.on('change', () => {
  console.log('change');
});

newUser.events.trigger('change');
