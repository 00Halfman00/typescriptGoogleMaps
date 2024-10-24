import { User } from './User';
import { Company } from './Company';
import { customMap } from './Map';

// custom marker image on map
const beachFlagImg = document.createElement('img');
beachFlagImg.src =
  'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

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

// create map
const map = new customMap('map');

// create a couple of markers for testing
const userMarker = map.createMarker(userMarkInfo);
const companyMarker = map.createMarker(companyMarkInfo);
