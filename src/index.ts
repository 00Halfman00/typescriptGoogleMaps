const beachFlagImg = document.createElement('img');
beachFlagImg.src =
  'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

import { User } from './User';
import { Company } from './Company';
import { customMap } from './Map';

// what I wrote// I'm assuming that title and position will come from the faker library

const user = new User();
const company = new Company();
const userMarkInfo = {
  name: user.name,
  location: user.location,
  pin: beachFlagImg,
  email: 'https://google.com',
};
const companyMarkInfo = {
  name: company.companyName,
  location: company.location,
  pin: null,
  email: null,
};
const map = new customMap('map');

// makes it less likely that someone adding a user or company or park or whaterver will mess things up
const userMarker = map.createMarker(userMarkInfo);
const companyMarker = map.createMarker(companyMarkInfo);
