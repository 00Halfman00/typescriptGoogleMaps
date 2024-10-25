import { faker } from '@faker-js/faker';
import { MarkInfo } from './Map';

// custom marker image on map for user
const beachFlagImg = document.createElement('img');
beachFlagImg.src =
  'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

export class User implements MarkInfo {
  //////////////// properties
  name: string;
  email: string;
  pin: HTMLElement;
  location: {
    lat: number;
    lng: number;
  };

  ///////////////// constructor
  constructor() {
    this.pin = beachFlagImg;
    this.name = faker.name.fullName();
    (this.email = 'https://google.com'),
      (this.location = {
        lat: +faker.address.latitude(),
        lng: +faker.address.longitude(),
      });
  }
}
