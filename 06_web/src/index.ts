import { User } from './models/User';

const user = new User({ id: 1 });
user.set({ name: 'Rebecca', age: 14 });
user.save();

const newUser = new User({ name: 'Jack', age: 0 });
newUser.save();
