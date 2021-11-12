import { Arg, Mutation, Resolver } from "type-graphql";
import { Car } from "../entity/Car";

@Resolver()
export class CarResolver {
	@Mutation(() => Boolean)
	async create(
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
}
