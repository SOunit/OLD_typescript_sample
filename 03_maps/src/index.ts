/// <reference types="@types/googlemaps" />
import { User } from './User';
import { Company } from './Company';

// parcel index.html
// parcel change index.ts to index.js

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: { lat: 0, lng: 0 },
});
