import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Car } from "../entity/Car";

@Resolver()
export class CarResolver {
	@Mutation(() => Boolean)
	async createCar(
		@Arg("name") name: string,
		@Arg("company") company: string,
		@Arg("description") description: string,
		@Arg("price") price: number,
		@Arg("features") features: string,
		@Arg("speed") speed: number,
		@Arg("mileage") mileage: number
	) {
		try {
			// TODO : Validation
			await Car.insert({
				name,
				company,
				description,
				price,
				features,
				speed,
				mileage
			});
		} catch (error) {
			console.log(error);
			return false;
		}

		return true;
	}

	@Query(() => [Car])
	async getAllCars() {
		try {
			// TODO : Validation
			return await Car.find();
		} catch (error) {
			console.log(error);
			return null;
		}
	}
}
