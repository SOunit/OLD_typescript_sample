import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// build command is...
// parcel index.html
// parcel change index.ts to index.js

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

new CustomMap('map');
