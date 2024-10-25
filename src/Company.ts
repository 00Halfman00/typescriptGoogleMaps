import { faker } from '@faker-js/faker';
import { MarkInfo } from './Map';

export class Company implements MarkInfo {
  name: string;
  pin: HTMLElement;
  email: string;
  slogan: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.slogan = faker.company.catchPhrase();
    this.email = 'https://amazon.com';
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude(),
    };
  }
}
