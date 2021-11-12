import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";

/**
 * Cars table
 */
@ObjectType()
@Entity("cars")
export class Car extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column()
	company: string;

	@Field()
	@Column()
	description: string;

	@Field()
	@Column({ type: "decimal", precision: 12, scale: 2 })
	price: number;

	@Field()
	@Column({ type: "text" })
	features: string;

	@Field()
	@Column({ type: "decimal", precision: 5, scale: 2 })
	speed: number;

	@Field()
	@Column({ type: "decimal", precision: 5, scale: 2 })
	mileage: number;
}
