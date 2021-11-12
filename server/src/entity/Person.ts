import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";

/**
 * Persons table
 */
@ObjectType()
@Entity("persons")
export class Person extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	gender: "male" | "female";

	@Field()
	@Column()
	heightCm: number;

	@Field()
	@Column()
	weightKg: number;

	@Field()
	@Column({ type: "decimal", precision: 10, scale: 1 })
	bmi: number;

	@Field()
	@Column()
	bmiCategory: number;

	@Field()
	@Column()
	healthRisk: number;
}
