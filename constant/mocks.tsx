import { faker } from "@faker-js/faker";

const padNumber = (num: number, size: number) =>
  String(num).padStart(size, "0");

export const order = Array.from({ length: 100 }, (_, index) => ({
  id: faker.string.uuid(),
  number: padNumber(index + 1, 4),
  name: faker.company.name(),
  city: faker.location.city(),
  logo: faker.image.url(),
  status: faker.helpers.arrayElement(["Visible", "Hidden"]),
  quantity: faker.number.int({ min: 1, max: 10 }),
  totalPrice: faker.number.int({ min: 100, max: 1000 }),
}));
