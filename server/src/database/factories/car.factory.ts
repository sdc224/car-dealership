import { define } from "typeorm-seeding";
import Faker, { vehicle } from "faker";
import { Car } from "../../entity/Car";

define(Car, (faker: typeof Faker) => {
	const name = vehicle.vehicle();
	const company = vehicle.manufacturer();
	const model = vehicle.model();
	const type = vehicle.type();
	const color = vehicle.color();
	const fuel = vehicle.fuel();
	const description = faker.lorem.sentence(1);
	const features = faker.lorem.lines(5);
	const price = faker.finance.amount(300000, 150000000, 2);
	const speed = faker.finance.amount(140, 300, 2);
	const mileage = faker.finance.amount(18, 100, 2);

	const car = new Car();
	car.name = name;
	car.company = company;
	car.model = model;
	car.type = type;
	car.color = color;
	car.fuel = fuel;
	car.description = description;
	car.features = features;
	car.price = Number(price);
	car.speed = Number(speed);
	car.mileage = Number(mileage);

	return car;
});
