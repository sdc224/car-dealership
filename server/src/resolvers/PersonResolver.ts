import { Person } from "../entity/Person";
import { Arg, Mutation, Resolver } from "type-graphql";

@Resolver()
export class PersonResolver {
	private calculateCategories(bmi: number): number {
		if (bmi < 18.5) return 0;
		if (bmi >= 18.5 && bmi < 25) return 1;
		if (bmi >= 25 && bmi < 30) return 2;
		if (bmi >= 30 && bmi < 35) return 3;
		if (bmi >= 35 && bmi < 40) return 4;
		return 5;
	}

	@Mutation(() => Boolean)
	async createPerson(
		@Arg("gender") gender: "male" | "female",
		@Arg("heightCm") heightCm: number,
		@Arg("weightKg") weightKg: number
	) {
		try {
			const bmi = weightKg / Math.pow(heightCm / 100, 2);
			const res = this.calculateCategories(bmi);
			await Person.insert({
				gender,
				heightCm,
				weightKg,
				bmi,
				bmiCategory: res,
				healthRisk: res
			});
		} catch (error) {
			console.log(error);
			return false;
		}

		return true;
	}

	@Mutation(() => Number)
	async calculateTotalOverweight() {
		let count = 0;
		try {
			count = await Person.count({ where: { bmiCategory: 5 } });
		} catch (error) {
			console.log(error);
		}

		return count;
	}
}
