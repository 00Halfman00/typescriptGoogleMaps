import { User } from './User';
import { Company } from './Company';
import { customMap } from './Map';

// create class instance of user company
const user = new User();
const company = new Company();

// create map
const map = new customMap('map');

// create a couple of markers for testing
const userMarker = map.createMarker(user);
const companyMarker = map.createMarker(company);
