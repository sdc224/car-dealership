import { Factory, Seeder } from "typeorm-seeding";
import { Car } from "../../entity/Car";

export default class CreateCars implements Seeder {
	public async run(factory: Factory): Promise<any> {
		await factory(Car)().createMany(40);
	}
}
