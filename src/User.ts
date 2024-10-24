import { faker } from '@faker-js/faker';

// import faker from 'faker';

const dude = faker;

export class User {
  //////////////// properties
  name: string;
  email: string;
  location: {
    lat: number;
    lng: number;
  };

  ///////////////// constructor
  constructor() {
    this.name = faker.name.fullName();
    (this.email = faker.internet.email()),
      (this.location = {
        lat: +faker.address.latitude(),
        lng: +faker.address.longitude(),
      });
  }
}
